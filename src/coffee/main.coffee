saveFileName = 'image.png'

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
    a.download = saveFileName
    a.click()

  saveButton = document.getElementById 'save'
  saveButton.disabled = null
  saveButton.addEventListener 'click', save

  # ---------------------------------------------------------

  original = () ->
    ctx.putImageData imageData, 0, 0
    saveFileName = "image.png"
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
    saveFileName = "image-grayscale.png"
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
    saveFileName = "image-emboss.png"
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
    saveFileName = "image-sharp.png"
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
    saveFileName = "image-negative.png"
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
    saveFileName = "image-contrast-enhancement.png"
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
    saveFileName = "image-contrast-reduction.png"
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
    saveFileName = "image-gaussian-filter.png"
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
    saveFileName = "image-sobel-filter.png"
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
    saveFileName = "image-laplacian-filter.png"
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
    saveFileName = "image-pixelization.png"
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
    saveFileName = "image-pixelization-hard.png"
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
    saveFileName = "image-binarization.png"
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
    saveFileName = "image-percentile-method.png"
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
    saveFileName = "image-filter1.png"
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
    saveFileName = "image-filter2.png"
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
    saveFileName = "image-filter3.png"
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
    saveFileName = "image-filter4.png"
    return out

  filter4Button = document.getElementById 'filter4'
  filter4Button.addEventListener 'click', filter4

  # ---------------------------------------------------------

  filter5 = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    a = [0.0073412, 0.647019, 0.7914]
    for i in [0...data.length] by 4
      outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])))
      outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])))
      outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])))
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-filter5.png"
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
    saveFileName = "image-filter6.png"
    return out

  filter6Button = document.getElementById 'filter6'
  filter6Button.addEventListener 'click', filter6

  # ---------------------------------------------------------

  posterization = (s = 5) ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data

    unless typeof s is 'number'
      s = 5

    # Red
    sr = s
    nr = 256 / sr
    dr = 255 / (sr - 1)
    br = (0 for [1..256])
    for i in [0...sr]
      for j in [Math.floor(i * nr)...Math.floor((i+1) * nr)]
        br[j] = dr * i

    # Green
    sg = s
    ng = 256 / sg
    dg = 255 / (sg - 1)
    bg = (0 for [1..256])
    for i in [0...sg]
      for j in [Math.floor(i * ng)...Math.floor((i+1) * ng)]
        bg[j] = dg * i
    # Blue
    sb = s
    nb = 256 / sb
    db = 255 / (sb - 1)
    bb = (0 for [1..256])
    for i in [0...sb]
      for j in [Math.floor(i * nb)...Math.floor((i+1) * nb)]
        bb[j] = db * i

    for i in [0...data.length] by 4
      outData[i] = br[data[i]]
      outData[i + 1] = bg[data[i + 1]]
      outData[i + 2] = bb[data[i + 2]]
      outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-posterization.png"
    return out

  posterizationButton = document.getElementById 'posterization'
  posterizationButton.addEventListener 'click', posterization

  # ---------------------------------------------------------

  medianFilter = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data
    for y in [1...imageData.height-1]
      for x in [1...imageData.width-1]
        i = (y * imageData.width + x) * 4
        valuesR = []
        valuesG = []
        valuesB = []
        for dy in [-1..1]
          for dx in [-1..1]
            di = ((y + dy) * imageData.width + (x + dx)) * 4
            valuesR.push data[di]
            valuesG.push data[di + 1]
            valuesB.push data[di + 2]
        valuesR.sort (a, b) ->
          if a > b then return -1
          if a < b then return 1
          return 0
        valuesG.sort (a, b) ->
          if a > b then return -1
          if a < b then return 1
          return 0
        valuesB.sort (a, b) ->
          if a > b then return -1
          if a < b then return 1
          return 0

        outData[i] = valuesR[4]
        outData[i + 1] = valuesG[4]
        outData[i + 2] = valuesB[4]
        outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-median-filter.png"
    return out

  medianFilterButton = document.getElementById 'median_filter'
  medianFilterButton.addEventListener 'click', medianFilter

  # ---------------------------------------------------------

  kaiga = () ->
    out = posterization(64)
    outData = out.data
    for y in [2...imageData.height-2]
      for x in [2...imageData.width-2]
        i = (y * imageData.width + x) * 4
        histR = (0 for [1..256])
        histG = (0 for [1..256])
        histB = (0 for [1..256])
        for dy in [-2..2]
          for dx in [-2..2]
            di = ((y + dy) * imageData.width + (x + dx)) * 4
            histR[data[di]] += 1
            histG[data[di + 1]] += 1
            histB[data[di + 2]] += 1
        maxR = 0
        maxG = 0
        maxB = 0
        valueR = 0
        valueG = 0
        valueB = 0
        for k in [0..255]
          if maxR < histR[k]
            maxR = histR[k]
            valueR = k
          if maxG < histG[k]
            maxG = histG[k]
            valueG = k
          if maxB < histB[k]
            maxB = histB[k]
            valueB = k

        outData[i] = valueR
        outData[i + 1] = valueG
        outData[i + 2] = valueB
        outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-kaiga.png"
    return out

  kaigaButton = document.getElementById 'kaiga'
  kaigaButton.addEventListener 'click', kaiga

  # ---------------------------------------------------------

  firFilter = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data

    a = [1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9]

    for y in [2...imageData.height]
      for x in [2...imageData.width]
        i = (y * imageData.width + x) * 4
        sum = [0, 0, 0]
        for dy in [-2..0]
          for dx in [-2..0]
            ka = (dy + 2) * 3 + (dx + 2)
            di = ((y + dy) * imageData.width + (x + dx)) * 4
            for c in [0...3]
              sum[c] += data[di + c] * a[ka]
        outData[i] = sum[0]
        outData[i + 1] = sum[1]
        outData[i + 2] = sum[2]
        outData[i + 3] = data[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-fir-filter.png"
    return out

  firFilterButton = document.getElementById 'fir_filter'
  firFilterButton.addEventListener 'click', firFilter

  # ---------------------------------------------------------

  gamma = () ->
    out = grayscale()
    outData = out.data
    max = 255
    gamma = 1.5
    for i in [0...outData.length] by 4
      outData[i] = max * Math.pow(data[i] / max, 1/gamma)
      outData[i + 1] = max * Math.pow(data[i + 1] / max, 1/gamma)
      outData[i + 2] = max * Math.pow(data[i + 2] / max, 1/gamma)
      outData[i + 3] = outData[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-gamma.png"
    return

  gammaButton = document.getElementById 'gamma'
  gammaButton.addEventListener 'click', gamma

  # ---------------------------------------------------------

  red = () ->
    out = grayscale()
    outData = out.data
    for i in [0...data.length] by 4
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]
      max = Math.max(r, g, b)
      min = Math.min(r, g, b)

      if r == g and r == b
        h = 0
      else if r >= g and r >= b
        h = 60 * ((g - b) / (max - min))
      else if g >= r and g >= b
        h = 60 * ((b - r) / (max - min)) + 120
      else if b >= r and b >= g
        h = 60 * ((r - g) / (max - min)) + 240

      while h < 0
        h += 360

      if h <= 30 or h >= 300
        outData[i] = r
        outData[i + 1] = g
        outData[i + 2] = b

    ctx.putImageData out, 0, 0
    saveFileName = "image-red.png"
    return out

  redButton = document.getElementById 'red'
  redButton.addEventListener 'click', red

  # ---------------------------------------------------------

  green = () ->
    out = grayscale()
    outData = out.data
    for i in [0...data.length] by 4
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]
      max = Math.max(r, g, b)
      min = Math.min(r, g, b)

      if r == g and r == b
        h = 0
      else if r >= g and r >= b
        h = 60 * ((g - b) / (max - min))
      else if g >= r and g >= b
        h = 60 * ((b - r) / (max - min)) + 120
      else if b >= r and b >= g
        h = 60 * ((r - g) / (max - min)) + 240

      while h < 0
        h += 360

      if h <= 180 and h >= 30
        outData[i] = r
        outData[i + 1] = g
        outData[i + 2] = b

    ctx.putImageData out, 0, 0
    saveFileName = "image-green.png"
    return out

  greenButton = document.getElementById 'green'
  greenButton.addEventListener 'click', green

  # ---------------------------------------------------------

  blue = () ->
    out = grayscale()
    outData = out.data
    for i in [0...data.length] by 4
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]
      max = Math.max(r, g, b)
      min = Math.min(r, g, b)

      if r == g and r == b
        h = 0
      else if r >= g and r >= b
        h = 60 * ((g - b) / (max - min))
      else if g >= r and g >= b
        h = 60 * ((b - r) / (max - min)) + 120
      else if b >= r and b >= g
        h = 60 * ((r - g) / (max - min)) + 240

      while h < 0
        h += 360

      if h <= 300 and h >= 180
        outData[i] = r
        outData[i + 1] = g
        outData[i + 2] = b

    ctx.putImageData out, 0, 0
    saveFileName = "image-blue.png"
    return out

  blueButton = document.getElementById 'blue'
  blueButton.addEventListener 'click', blue

  # ---------------------------------------------------------

  simple = () ->
    out = grayscale()
    outData = out.data

    unless typeof s is 'number'
      s = 5

    # Red
    sr = s
    nr = 256 / sr
    dr = 255 / (sr - 1)
    br = (0 for [1..256])
    for i in [0...sr]
      for j in [Math.floor(i * nr)...Math.floor((i+1) * nr)]
        br[j] = dr * i

    # Green
    sg = s
    ng = 256 / sg
    dg = 255 / (sg - 1)
    bg = (0 for [1..256])
    for i in [0...sg]
      for j in [Math.floor(i * ng)...Math.floor((i+1) * ng)]
        bg[j] = dg * i
    # Blue
    sb = s
    nb = 256 / sb
    db = 255 / (sb - 1)
    bb = (0 for [1..256])
    for i in [0...sb]
      for j in [Math.floor(i * nb)...Math.floor((i+1) * nb)]
        bb[j] = db * i

    for i in [0...data.length] by 4
      outData[i] = br[outData[i]]
      outData[i + 1] = bg[outData[i + 1]]
      outData[i + 2] = bb[outData[i + 2]]
      outData[i + 3] = outData[i + 3]
    ctx.putImageData out, 0, 0
    saveFileName = "image-simple.png"
    return out

  simpleButton = document.getElementById 'simple'
  simpleButton.addEventListener 'click', simple

  # ---------------------------------------------------------

  lorentz = () ->
    out = ctx.createImageData imageData.width, imageData.height
    outData = out.data

    tmp = ctx.createImageData imageData.width, imageData.height
    tmpData = tmp.data

    ranks = [51, 102, 153, 204, 255]

    counts =
      r:
        51: 0
        102: 0
        153: 0
        204: 0
        255: 0
      g:
        51: 0
        102: 0
        153: 0
        204: 0
        255: 0
      b:
        51: 0
        102: 0
        153: 0
        204: 0
        255: 0

    for i in [0...data.length] by 4
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]

      isEndR = false
      isEndG = false
      isEndB = false

      for rank in ranks
        if r <= rank and isEndR is false
          counts.r[rank] += 1
          isEndR = true
          tmpData[i] = rank
        if g <= rank and isEndG is false
          counts.g[rank] += 1
          isEndG = true
          tmpData[i + 1] = rank
        if b <= rank and isEndB is false
          counts.b[rank] += 1
          isEndB = true
          tmpData[i + 2] = rank
        if isEndR and isEndG and isEndB
          tmpData[i + 3] = data[i + 3]
          break

    ratio =
      r:
        51: 0
        102: 0
        153: 0
        204: 0
        255: 0
      g:
        51: 0
        102: 0
        153: 0
        204: 0
        255: 0
      b:
        51: 0
        102: 0
        153: 0
        204: 0
        255: 0

    sum = data.length / 4
    sumR = 0
    sumG = 0
    sumB = 0
    for rank in ranks
      sumR += counts.r[rank]
      sumG += counts.g[rank]
      sumB += counts.b[rank]
      ratio.r[rank] = sumR / sum
      ratio.g[rank] = sumG / sum
      ratio.b[rank] = sumB / sum

    for i in [0...data.length] by 4
      outData[i] = data[i] * ratio.r[tmpData[i]]
      outData[i + 1] = data[i + 1] * ratio.g[tmpData[i + 1]]
      outData[i + 2] = data[i + 2] * ratio.b[tmpData[i + 2]]
      outData[i + 3] = data[i + 3]

    ctx.putImageData out, 0, 0
    saveFileName = "image-lorentz.png"
    return out

  lorentzButton = document.getElementById 'lorentz'
  lorentzButton.addEventListener 'click', lorentz

  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------
  # ---------------------------------------------------------
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
