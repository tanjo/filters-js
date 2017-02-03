window.onload = () ->
  io = new IO '#getfile', '#preview'
  io.preview (dataURL) ->
    canvas = new Canvas document, '#result', dataURL
    filters = new Filters canvas.getImageData()
    canvas.setImageData filters.grayscale()
  return
