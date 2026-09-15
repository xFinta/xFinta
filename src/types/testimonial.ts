export interface Testimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatarSeed: string;
  /** Populate once a real client photo exists — falls back to the
   * generated gradient avatar whenever undefined or if the file fails to
   * load, same swap-out contract as PortfolioImage.src. */
  avatarSrc?: string;
}
