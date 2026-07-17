export type PhotoAlbum = {
  slug: string;
  title: string;
  date: string;
  description: string;
  photos: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

/**
 * Add albums here. They are automatically sorted newest-first on the Photos page.
 * Place each image in public/photos/<album-slug>/ and reference it with
 * /photos/<album-slug>/<filename>.
 */
export const photoAlbums: PhotoAlbum[] = [];
