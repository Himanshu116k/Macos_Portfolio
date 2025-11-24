import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import WindowControlls from '../components/WindowControlls'
import useWindowStore from '../store/window'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) return null

  const { name, image, imageUrl, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowControlls target="txtfile" />
      </div>

      <div className="bg-white p-4 max-w-[44rem]">
        <div className="flex items-center gap-4">
          {(image || imageUrl) && (
            <img
              src={image || imageUrl}
              alt={name}
              className="w-16 h-16 object-cover rounded"
            />
          )}

          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {Array.isArray(description) &&
            description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">
                {para}
              </p>
            ))}
        </div>
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow
