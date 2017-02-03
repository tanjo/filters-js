class IO
  constructor: (@inputId, @previewId) ->

  preview: (completion) ->
    unless document
      return
    img = document.querySelector @previewId
    input = document.querySelector @inputId
    input.onchange = () ->
      fileList = input.files
      reader = new FileReader()
      reader.onload = () ->
        unless document
          return
        img.src = reader.result
        completion(reader.result)
        return
      reader.readAsDataURL fileList[0]
      return
    return

if typeof module isnt 'undefined' and typeof module.exports isnt 'undefined'
  module.export = IO
else
  window.IO = IO
