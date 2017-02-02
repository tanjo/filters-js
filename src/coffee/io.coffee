class IO
  constructor: @inputId @previewId ->
    unless document
      @isAvailable = false
      return @
    @isAvailable = true

  preview: () ->
    input = document.querySelector @inputId
    input.onchange = () ->
      fileList = input.files
      render = new FileReader()
      render.readAsDataURL fileList[0]
      render.onload = () ->
        document.querySelector(@previewId).src = render.result

module.export = IO
