class Filters
  @red = 0
  @green = 1
  @blue = 2

  constructor: (@imageData) ->

  grayscale: (channels = 4) ->
    data = @imageData.data
    for y in [0..@imageData.height]
      for x in [0..@imageData.width]
        index = (x + y * @imageData.width) * channels
        avg = data[index] + data[index + 1] + data[index + 2] / 3
        data[index + @red] = avg
        data[index + @green] = avg
        data[index + @blue] = avg
    @imageData.data = data
    return @imageData

if typeof module isnt 'undefined' and typeof module.exports isnt 'undefined'
  module.export = Filters
else
  window.Filters = Filters
