export function Button({ text }: { text: string }) {
  return (
    <a href="/login">
      <button className="group relative h-10 overflow-hidden rounded-md px-6 text-neutral-50 transition hover:bg-[#0000009e]">
        <span className="relative">{text}</span>
        <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
          <div className="relative h-full w-8 bg-white/30"></div>
        </div>
      </button>
    </a>
  );
}