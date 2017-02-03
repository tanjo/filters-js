class Canvas
  constructor: (@document, @canvasId, @dataURL) ->
    @canvas = @document.querySelector @canvasId
    unless @canvas
      return
    @ctx = @canvas.getContext '2d'
    @img = new Image()
    @img.src = @dataURL
    @canvas.width = @img.width
    @canvas.height = @img.height
    @ctx.drawImage @img, 0, 0, @canvas.width, @canvas.height

  getImageData: () ->
    @ctx.getImageData(0, 0, @canvas.width, @canvas.height)

  setImageData: (imageData) ->
    @ctx.putImageData imageData, 0, 0
    return

if typeof module isnt 'undefined' and typeof module.exports isnt 'undefined'
  module.export = Canvas
else
  window.Canvas = Canvas
