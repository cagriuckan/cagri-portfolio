import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="brand brand--classic" aria-label="Çağrı Üçkan home">
      <span className="brand-photo" aria-hidden="true">
        <img src="/avatar.png" alt="" width={44} height={44} />
      </span>
      <span className="brand__text">Çağrı Üçkan</span>
    </Link>
  );
}
