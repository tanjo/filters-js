draw = (img) ->
  canvas = document.getElementById 'result'
  ctx = canvas.getContext '2d'
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage img, 0, 0, img.width, img.height
  img.style.display = 'none'
  imageData = ctx.getImageData 0, 0, canvas.width, canvas.height
  data = imageData.data

  grayscale = () ->
    for i in [0...data.length] by 4
      avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      data[i] = avg
      data[i + 1] = avg
      data[i + 2] = avg
    ctx.putImageData imageData, 0, 0

  grayscaleButton = document.getElementById 'grayscale'
  grayscaleButton.addEventListener 'click', grayscale
  return

window.onload = () ->
  img = document.getElementById 'preview'
  input = document.getElementById 'getfile'
  input.onchange = () ->
    image = new Image()
    image.onload = () ->
      draw　this
      return
    reader = new FileReader()
    reader.onload = () ->
      image.src = reader.result
    reader.readAsDataURL input.files[0]
    return
  return
