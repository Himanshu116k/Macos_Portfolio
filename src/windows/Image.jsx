import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import WindowControlls from '../components/WindowControlls'
import useWindowStore from '../store/window'

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  if (!data) return null

  const { name, image, imageUrl, subtitle } = data
  const src = image || imageUrl || data?.imageUrl

  return (
    <>
      <div id="window-header">
        <WindowControlls target="imgfile" />
      </div>

      <div className="bg-white p-4 max-w-[60rem]">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        </div>

        {src && (
          <div className="flex justify-center">
            <img src={src} alt={name} className="max-w-full h-auto rounded shadow" />
          </div>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow
