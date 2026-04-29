import { useEffect, useRef } from 'react'

type ImageLightboxProps = {
  open: boolean
  onClose: () => void
  src: string | null
  alt: string
}

export default function ImageLightbox({ open, onClose, src, alt }: ImageLightboxProps) {
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  if (!open || !src) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh lớn"
      onClick={() => onCloseRef.current()}
    >
      <button
        type="button"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 font-body text-[#f0d8be]/90 text-xs sm:text-sm tracking-widest uppercase px-3 py-2 rounded border border-[#f0d8be]/35 hover:bg-[#f0d8be]/10 transition-colors"
        onClick={e => {
          e.stopPropagation()
          onCloseRef.current()
        }}
      >
        Đóng
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[92vh] w-auto h-auto object-contain shadow-2xl select-none"
        onClick={e => e.stopPropagation()}
        draggable={false}
      />
    </div>
  )
}
