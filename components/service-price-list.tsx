import { formatCurrency } from "@/lib/format";
import { getServicesByCategory } from "@/sanity/fetchSiteContent";
import type { LocationId, Service, ServiceCategory } from "@/types/salon";
import { BookingButton } from "@/components/booking-button";
import type { SiteContent } from "@/content/fallback";
import Image from "next/image";

function getPriceForLocation(serviceItem: Service, locationId: LocationId) {
  return serviceItem.locationPrices.find((price) => price.locationId === locationId);
}

export function ServicePriceList({
  locationId,
  content
}: {
  locationId: LocationId;
  content: SiteContent;
}) {
  return (
    <div className="grid gap-10">
      {content.categories.map((category: ServiceCategory) => {
        const categoryServices = getServicesByCategory(content, category.id);
        const featuredService = categoryServices.find((item) => item.featured) ?? categoryServices[0];
        return (
          <section id={category.slug} key={category.id} className="scroll-mt-32 overflow-hidden rounded-lg border border-espresso/10 bg-cream/75 shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-64 border-b border-espresso/10 lg:border-b-0 lg:border-r">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-7">
                <div className="flex flex-col gap-4 border-b border-espresso/10 pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase text-taupe">{category.name}</p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold">{category.name}</h2>
                    <p className="mt-3 max-w-3xl leading-7 text-espresso/75">{category.description}</p>
                    {featuredService?.fullDescription ? (
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-espresso/62">{featuredService.fullDescription}</p>
                    ) : null}
                  </div>
                  <BookingButton
                    label={`Book ${category.name}`}
                    variant="secondary"
                    className="md:shrink-0"
                    bookingUrl={content.salon.squareBookingUrl}
                  />
                </div>
                <div className="mt-5 grid gap-3">
                  {categoryServices.map((item) => {
                    const price = getPriceForLocation(item, locationId);
                    return (
                      <article key={item.id} className="rounded-lg bg-white/50 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-espresso">{item.name}</h3>
                            <p className="mt-1 leading-7 text-espresso/70">{item.shortDescription}</p>
                            {item.priceNote || price?.note ? (
                              <p className="mt-2 text-sm font-medium text-espresso/60">{price?.note ?? item.priceNote}</p>
                            ) : null}
                          </div>
                          <div className="text-left sm:min-w-28 sm:text-right">
                            {price?.available && price.price !== undefined ? (
                              <p className="text-xl font-bold text-espresso">{formatCurrency(price.price)}</p>
                            ) : (
                              <p className="text-sm font-bold uppercase text-taupe">Unavailable</p>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
