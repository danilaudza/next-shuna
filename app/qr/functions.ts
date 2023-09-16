export const convertAndDownloadPng = () => {
  const svg = document.getElementById("result")
  if (svg) {
    const svgContent = new XMLSerializer().serializeToString(svg)

    // Convert SVG to PNG using an HTMLImageElement
    const img = new Image()
    img.src = "data:image/svg+xml;base64," + btoa(svgContent)

    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width as number
      canvas.height = img.height as number
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
      ctx.drawImage(img, 0, 0)

      canvas.toBlob((blob: any) => {
        const url = URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = "result.png"
        document.body.appendChild(a)
        a.click()

        // Clean up
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }, "image/png")
    }
  } else {
    console.error('SVG element with id "result" not found.')
  }
}

export const downloadSvg = () => {
  const svg = document.getElementById("result")
  if (svg) {
    const svgContent = new XMLSerializer().serializeToString(svg)
    const blob = new Blob([svgContent], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "result.svg"
    document.body.appendChild(a)
    a.click()

    // Clean up
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } else {
    console.error('SVG element with id "result" not found.')
  }
}
