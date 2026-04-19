export function Footer() {
  return (
    <footer className="border-t border-border py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:py-10 sm:pb-10">
      <div className="mx-auto max-w-6xl px-5 text-sm text-muted sm:px-8">
        <p>© {new Date().getFullYear()} Luan Motta</p>
      </div>
    </footer>
  );
}
