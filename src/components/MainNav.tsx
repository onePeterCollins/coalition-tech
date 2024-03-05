export function MainNav(props: { opacity: number }) {
  const { opacity } = props
  const brandNameOpacity = opacity ?? 0

  return (
    <div className="flex gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <img src="/images/vector_smart_object_2.png" alt="Logo" width={45} height={45} className="logo" />

        <img
          src="/images/losangeles_mountains_2.png"
          alt="Brand name"
          height={45}
          className="logo"
          style={{ opacity: brandNameOpacity }}
        />
      </a>
    </div>
  )
}
