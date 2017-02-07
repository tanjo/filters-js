draw = (img) ->
  canvas = document.getElementById 'result'
  ctx = canvas.getContext '2d'
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage img, 0, 0, img.width, img.height
  img.style.display = 'none'
  imageData = ctx.getImageData 0, 0, canvas.width, canvas.height
  data = imageData.data


  save = () ->
    window.open canvas.toDataURL 'image/png'
    gh = canvas.toDataURL 'png'
    a = document.createElement 'a'
    a.href = gh
    a.download = 'image.png'
    a.click()

  saveButton = document.getElementById 'save'
  saveButton.disabled = null
  saveButton.addEventListener 'click', save

  # ---------------------------------------------------------

  original = () ->
    ctx.putImageData imageData, 0, 0
    return

  originalButton = document.getElementById 'original'
  originalButton.addEventListener 'click', original

  # ---------------------------------------------------------

  grayscale = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for i in [0...data.length] by 4
      avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      outData[i] = avg
      outData[i + 1] = avg
      outData[i + 2] = avg
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  grayscaleButton = document.getElementById 'grayscale'
  grayscaleButton.addEventListener 'click', grayscale

  # ---------------------------------------------------------

  emboss = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    kernel = [
      -1, -1,  0,
      -1,  1,  1,
       0,  1,  1
    ]
    for y in [1...imageData.height-1]
      for x in [1...imageData.width-1]
        for c in [0...3]
          i = (y * imageData.width + x) * 4 + c
          tmp = 0
          for dy in [-1..1]
            for dx in [-1..1]
              kernelIndex = (dy + 1) * 3 + (dx + 1)
              dataIndex = ((y+dy) * imageData.width + (x+dx)) * 4 + c
              tmp += kernel[kernelIndex] * data[dataIndex]
          if tmp > 255
            outData[i] = 255
          if tmp < 0
            outData[i] = 0
          else
            outData[i] = tmp
        alphaIndex = (y * imageData.width + x) * 4 + 3
        outData[alphaIndex] = data[alphaIndex] # Alpha
    ctx.putImageData out, 0, 0
    return

  embossButton = document.getElementById 'emboss'
  embossButton.addEventListener 'click', emboss

  # ---------------------------------------------------------

  sharp = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    kernel = [
       0, -1,  0,
      -1,  5, -1,
       0, -1,  0
    ]
    for y in [1...imageData.height-1]
      for x in [1...imageData.width-1]
        for c in [0...3]
          i = (y * imageData.width + x) * 4 + c
          tmp = 0
          for dy in [-1..1]
            for dx in [-1..1]
              kernelIndex = (dy + 1) * 3 + (dx + 1)
              dataIndex = ((y+dy) * imageData.width + (x+dx)) * 4 + c
              tmp += kernel[kernelIndex] * data[dataIndex]
          if tmp > 255
            outData[i] = 255
          if tmp < 0
            outData[i] = 0
          else
            outData[i] = tmp
        alphaIndex = (y * imageData.width + x) * 4 + 3
        outData[alphaIndex] = data[alphaIndex] # Alpha
    ctx.putImageData out, 0, 0
    return

  sharpButton = document.getElementById 'sharp'
  sharpButton.addEventListener 'click', sharp

  # ---------------------------------------------------------

  negative = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for i in [0...data.length] by 4
      outData[i] = 255 - data[i]
      outData[i + 1] = 255 - data[i + 1]
      outData[i + 2] = 255 - data[i + 2]
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return

  negativeButton = document.getElementById 'negative'
  negativeButton.addEventListener 'click', negative

  # ---------------------------------------------------------

  contrastEnhancement = () ->
    filter = (value) ->
      a = 1.5
      return a * (value - 127) + 127

    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for i in [0...data.length] by 4
      outData[i] = filter(data[i])
      outData[i + 1] = filter(data[i + 1])
      outData[i + 2] = filter(data[i + 2])
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return

  contrastEnhancementButton = document.getElementById 'contrast_enhancement'
  contrastEnhancementButton.addEventListener 'click', contrastEnhancement

  # ---------------------------------------------------------

  contrastReduction = () ->
    filter = (value) ->
      a = 0.5
      return a * (value - 127) + 127

    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for i in [0...data.length] by 4
      outData[i] = filter(data[i])
      outData[i + 1] = filter(data[i + 1])
      outData[i + 2] = filter(data[i + 2])
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return

  contrastReductionButton = document.getElementById 'contrast_reduction'
  contrastReductionButton.addEventListener 'click', contrastReduction

  # ---------------------------------------------------------

  gaussianFilter = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data

    kernel = [
      0.00390625, 0.015625, 0.0234375, 0.015625, 0.00390625,
      0.015625,   0.0625,   0.09375,   0.0625,   0.015625,
      0.0234375,  0.09375,  0.140625,  0.09375,  0.0234375,
      0.015625,   0.0625,   0.09375,   0.0625,   0.015625,
      0.00390625, 0.015625, 0.0234375, 0.015625, 0.00390625,
    ]

    for y in [2...imageData.height-2]
      for x in [2...imageData.width-2]
        for c in [0...3]
          i = (y * imageData.width + x) * 4 + c
          tmp = 0
          for dy in [-2..2]
            for dx in [-2..2]
              kernelIndex = (dy + 2) * 5 + (dx + 2)
              dataIndex = ((y+dy) * imageData.width + (x+dx)) * 4 + c
              tmp += kernel[kernelIndex] * data[dataIndex]
          if tmp > 255
            outData[i] = 255
          if tmp < 0
            outData[i] = 0
          else
            outData[i] = tmp
        alphaIndex = (y * imageData.width + x) * 4 + 3
        outData[alphaIndex] = data[alphaIndex] # Alpha
    ctx.putImageData out, 0, 0
    return

  gaussianFilterButton = document.getElementById 'gaussian_filter'
  gaussianFilterButton.addEventListener 'click', gaussianFilter

  # ---------------------------------------------------------

  sobelFilter = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    kernel = [
      -1, 0, 1,
      -2, 0, 2,
      -1, 0, 1
    ]
    for y in [1...imageData.height-1]
      for x in [1...imageData.width-1]
        for c in [0...3]
          i = (y * imageData.width + x) * 4 + c
          tmp = 0
          for dy in [-1..1]
            for dx in [-1..1]
              kernelIndex = (dy + 1) * 3 + (dx + 1)
              dataIndex = ((y+dy) * imageData.width + (x+dx)) * 4 + c
              tmp += kernel[kernelIndex] * data[dataIndex]
          if tmp > 255
            outData[i] = 255
          if tmp < 0
            outData[i] = 0
          else
            outData[i] = tmp
        alphaIndex = (y * imageData.width + x) * 4 + 3
        outData[alphaIndex] = data[alphaIndex] # Alpha
    ctx.putImageData out, 0, 0
    return

  sobelFilterButton = document.getElementById 'sobel_filter'
  sobelFilterButton.addEventListener 'click', sobelFilter

  # ---------------------------------------------------------

  laplacianFilter = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    kernel = [
      1,  1, 1,
      1, -8, 1,
      1,  1, 1
    ]
    for y in [1...imageData.height-1]
      for x in [1...imageData.width-1]
        for c in [0...3]
          i = (y * imageData.width + x) * 4 + c
          tmp = 0
          for dy in [-1..1]
            for dx in [-1..1]
              kernelIndex = (dy + 1) * 3 + (dx + 1)
              dataIndex = ((y+dy) * imageData.width + (x+dx)) * 4 + c
              tmp += kernel[kernelIndex] * data[dataIndex]
          if tmp > 255
            outData[i] = 255
          if tmp < 0
            outData[i] = 0
          else
            outData[i] = tmp
        alphaIndex = (y * imageData.width + x) * 4 + 3
        outData[alphaIndex] = data[alphaIndex] # Alpha
    ctx.putImageData out, 0, 0
    return

  laplacianFilterButton = document.getElementById 'laplacian_filter'
  laplacianFilterButton.addEventListener 'click', laplacianFilter

  # ---------------------------------------------------------

  pixelization = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for y in [0...imageData.height-2] by 5
      for x in [0...imageData.width-2] by 5
        sum = [0,0,0,0]
        count = 0
        for dy in [0..4]
          for dx in [0..4]
            yy = y + dy
            xx = x + dx
            if xx < imageData.width and yy < imageData.height
              count += 1
              i = (yy * imageData.width + xx) * 4
              sum[0] += data[i]
              sum[1] += data[i + 1]
              sum[2] += data[i + 2]
              sum[3] += data[i + 3]
        for dy in [0..4]
          for dx in [0..4]
            yy = y + dy
            xx = x + dx
            if xx < imageData.width and yy < imageData.height
              i = (yy * imageData.width + xx) * 4
              outData[i] = sum[0] / count
              outData[i + 1] = sum[1] / count
              outData[i + 2] = sum[2] / count
              outData[i + 3] = sum[3] / count
    ctx.putImageData out, 0, 0
    return

  pixelizationButton = document.getElementById 'pixelization'
  pixelizationButton.addEventListener 'click', pixelization

  # ---------------------------------------------------------

  pixelizationHard = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for y in [0...imageData.height-7] by 15
      for x in [0...imageData.width-7] by 15
        sum = [0,0,0,0]
        count = 0
        for dy in [0..14]
          for dx in [0..14]
            yy = y + dy
            xx = x + dx
            if xx < imageData.width and yy < imageData.height
              count += 1
              i = (yy * imageData.width + xx) * 4
              sum[0] += data[i]
              sum[1] += data[i + 1]
              sum[2] += data[i + 2]
              sum[3] += data[i + 3]
        for dy in [0..14]
          for dx in [0..14]
            yy = y + dy
            xx = x + dx
            if xx < imageData.width and yy < imageData.height
              i = (yy * imageData.width + xx) * 4
              outData[i] = sum[0] / count
              outData[i + 1] = sum[1] / count
              outData[i + 2] = sum[2] / count
              outData[i + 3] = sum[3] / count
    ctx.putImageData out, 0, 0
    return

  pixelizationHardButton = document.getElementById 'pixelization_hard'
  pixelizationHardButton.addEventListener 'click', pixelizationHard

  # ---------------------------------------------------------

  binarization = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    THRESHOLD = 127
    for i in [0...data.length] by 4
      outData[i] = if data[i] > THRESHOLD then 255 else 0
      outData[i + 1] = if data[i + 1] > THRESHOLD then 255 else 0
      outData[i + 2] = if data[i + 2] > THRESHOLD then 255 else 0
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return

  binarizationButton = document.getElementById 'binarization'
  binarizationButton.addEventListener 'click', binarization

  # ---------------------------------------------------------

  percentileMethod = () ->
    out = grayscale()
    outData = out.data
    hist = (0 for [1..256])
    for i in [0...outData.length] by 4
      hist[outData[i]] += 1
    middle = out.width * out.height / 2
    count = 0
    target = 0
    for i in [255..0]
      count += hist[i]
      if count >= middle
        target = i
        break
    for i in [0...outData.length] by 4
      outData[i] = if outData[i] > target then 255 else 0
      outData[i + 1] = if outData[i + 1] > target then 255 else 0
      outData[i + 2] = if outData[i + 2] > target then 255 else 0
      outData[i + 3] = outData[i + 3]
    ctx.putImageData out, 0, 0
    return

  percentileMethodButton = document.getElementById 'percentile_method'
  percentileMethodButton.addEventListener 'click', percentileMethod

  # ---------------------------------------------------------

  filter1 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.73412, 0.647019, 0.07914]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  filter1Button = document.getElementById 'filter1'
  filter1Button.addEventListener 'click', filter1

  # ---------------------------------------------------------

  filter2 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.073412, 0.0647019, 0.07914]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  filter2Button = document.getElementById 'filter2'
  filter2Button.addEventListener 'click', filter2

  # ---------------------------------------------------------

  filter3 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.9, 0.0, 0.5]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  filter3Button = document.getElementById 'filter3'
  filter3Button.addEventListener 'click', filter3

  # ---------------------------------------------------------

  filter4 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.373412, 0.347019, 0.3914]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  filter4Button = document.getElementById 'filter4'
  filter4Button.addEventListener 'click', filter4

  # ---------------------------------------------------------

  filter5 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.73412, 0.647019, 0.7914]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  filter5Button = document.getElementById 'filter5'
  filter5Button.addEventListener 'click', filter5

  # ---------------------------------------------------------

  filter6 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.93412, 0.647019, 0.0057914]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    return out

  filter6Button = document.getElementById 'filter6'
  filter6Button.addEventListener 'click', filter6

  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------

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
