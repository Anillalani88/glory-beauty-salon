import {createRequire} from "node:module";
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const moduleCache = new Map();

function loadTs(relativePath) {
  const filename = path.join(root, relativePath);
  if (moduleCache.has(filename)) return moduleCache.get(filename).exports;

  const source = readFileSync(filename, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true
    }
  }).outputText;

  const cjsModule = {exports: {}};
  moduleCache.set(filename, cjsModule);

  const localRequire = (specifier) => {
    if (specifier === "@/config/salon") return loadTs("src/config/salon.ts");
    if (specifier === "@/data/categories") return loadTs("src/data/categories.ts");
    if (specifier === "@/data/locations") return loadTs("src/data/locations.ts");
    if (specifier === "@/data/services") return loadTs("src/data/services.ts");
    if (specifier.startsWith("@/types/")) return {};
    return require(specifier);
  };

  const wrapper = vm.runInThisContext(`(function(exports, require, module, __filename, __dirname) {${compiled}\n})`, {
    filename
  });
  wrapper(cjsModule.exports, localRequire, cjsModule, filename, path.dirname(filename));
  return cjsModule.exports;
}

const {salonConfig} = loadTs("src/config/salon.ts");
const {locations} = loadTs("src/data/locations.ts");
const {categories} = loadTs("src/data/categories.ts");
const {services} = loadTs("src/data/services.ts");

const docs = [
  {
    _id: "salonSettings",
    _type: "salonSettings",
    name: salonConfig.name,
    tagline: salonConfig.tagline,
    demoNotice: salonConfig.demoNotice,
    priceNotice: salonConfig.priceNotice,
    womenOnlyNotice: salonConfig.womenOnlyNotice,
    contactEmail: salonConfig.contactEmail,
    squareBookingUrl: salonConfig.squareBookingUrl,
    donation: salonConfig.donation
  },
  ...locations.map((location) => ({
    ...location,
    _id: `location.${location.id}`,
    _type: "location",
    fallbackImage: location.image
  })),
  ...categories.map((category) => ({
    ...category,
    _id: `serviceCategory.${category.id}`,
    _type: "serviceCategory",
    slug: {_type: "slug", current: category.slug},
    fallbackImage: category.image
  })),
  ...services.map((service) => ({
    ...service,
    _id: `service.${service.id}`,
    _type: "service",
    slug: {_type: "slug", current: service.slug},
    category: {_type: "reference", _ref: `serviceCategory.${service.category}`},
    fallbackImage: service.image
  }))
];

const outputDir = path.join(root, "sanity", "seed");
if (!existsSync(outputDir)) mkdirSync(outputDir, {recursive: true});

const outputPath = path.join(outputDir, "glory-beauty-salon.ndjson");
writeFileSync(outputPath, docs.map((doc) => JSON.stringify(doc)).join("\n") + "\n");
console.log(`Wrote ${docs.length} Sanity documents to ${path.relative(root, outputPath)}`);
