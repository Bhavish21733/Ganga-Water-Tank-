import Image from "next/image";

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function CloudinaryImage({
  publicId,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
  sizes
}: CloudinaryImageProps) {
  
  // Development fallback: if the publicId is a full HTTP URL, use it directly.
  const isAbsoluteUrl = publicId.startsWith("http") || publicId.startsWith("/");
  
  const src = isAbsoluteUrl 
    ? publicId 
    : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload/f_auto,q_auto/${publicId}`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`object-cover ${className}`}
      priority={priority}
      sizes={sizes}
    />
  );
}
