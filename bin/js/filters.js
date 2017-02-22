(function() {
  var draw, saveFileName;

  saveFileName = 'image.png';

  draw = function(img) {
    var binarization, binarizationButton, blue, blueButton, canvas, contrastEnhancement, contrastEnhancementButton, contrastReduction, contrastReductionButton, ctx, data, emboss, embossButton, filter1, filter1Button, filter2, filter2Button, filter3, filter3Button, filter4, filter4Button, filter5, filter5Button, filter6, filter6Button, firFilter, firFilterButton, gamma, gammaButton, gaussianFilter, gaussianFilterButton, grayscale, grayscaleButton, green, greenButton, imageData, kaiga, kaigaButton, laplacianFilter, laplacianFilterButton, lorentz, lorentzButton, lorentzkai, lorentzkaiButton, medianFilter, medianFilterButton, negative, negativeButton, original, originalButton, percentileMethod, percentileMethodButton, pixelization, pixelizationButton, pixelizationHard, pixelizationHardButton, posterization, posterizationButton, red, redButton, save, saveButton, sharp, sharpButton, simple, simpleButton, sobelFilter, sobelFilterButton;
    canvas = document.getElementById('result');
    ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    img.style.display = 'none';
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imageData.data;
    save = function() {
      var a, gh;
      window.open(canvas.toDataURL('image/png'));
      gh = canvas.toDataURL('png');
      a = document.createElement('a');
      a.href = gh;
      a.download = saveFileName;
      return a.click();
    };
    saveButton = document.getElementById('save');
    saveButton.disabled = null;
    saveButton.addEventListener('click', save);
    original = function() {
      ctx.putImageData(imageData, 0, 0);
      saveFileName = "image.png";
    };
    originalButton = document.getElementById('original');
    originalButton.addEventListener('click', original);
    grayscale = function() {
      var avg, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        outData[i] = avg;
        outData[i + 1] = avg;
        outData[i + 2] = avg;
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-grayscale.png";
      return out;
    };
    grayscaleButton = document.getElementById('grayscale');
    grayscaleButton.addEventListener('click', grayscale);
    emboss = function() {
      var alphaIndex, c, dataIndex, dx, dy, i, kernel, kernelIndex, l, m, n, o, out, outData, p, ref, ref1, tmp, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      kernel = [-1, -1, 0, -1, 1, 1, 0, 1, 1];
      for (y = l = 1, ref = imageData.height - 1; 1 <= ref ? l < ref : l > ref; y = 1 <= ref ? ++l : --l) {
        for (x = m = 1, ref1 = imageData.width - 1; 1 <= ref1 ? m < ref1 : m > ref1; x = 1 <= ref1 ? ++m : --m) {
          for (c = n = 0; n < 3; c = ++n) {
            i = (y * imageData.width + x) * 4 + c;
            tmp = 0;
            for (dy = o = -1; o <= 1; dy = ++o) {
              for (dx = p = -1; p <= 1; dx = ++p) {
                kernelIndex = (dy + 1) * 3 + (dx + 1);
                dataIndex = ((y + dy) * imageData.width + (x + dx)) * 4 + c;
                tmp += kernel[kernelIndex] * data[dataIndex];
              }
            }
            if (tmp > 255) {
              outData[i] = 255;
            }
            if (tmp < 0) {
              outData[i] = 0;
            } else {
              outData[i] = tmp;
            }
          }
          alphaIndex = (y * imageData.width + x) * 4 + 3;
          outData[alphaIndex] = data[alphaIndex];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-emboss.png";
    };
    embossButton = document.getElementById('emboss');
    embossButton.addEventListener('click', emboss);
    sharp = function() {
      var alphaIndex, c, dataIndex, dx, dy, i, kernel, kernelIndex, l, m, n, o, out, outData, p, ref, ref1, tmp, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];
      for (y = l = 1, ref = imageData.height - 1; 1 <= ref ? l < ref : l > ref; y = 1 <= ref ? ++l : --l) {
        for (x = m = 1, ref1 = imageData.width - 1; 1 <= ref1 ? m < ref1 : m > ref1; x = 1 <= ref1 ? ++m : --m) {
          for (c = n = 0; n < 3; c = ++n) {
            i = (y * imageData.width + x) * 4 + c;
            tmp = 0;
            for (dy = o = -1; o <= 1; dy = ++o) {
              for (dx = p = -1; p <= 1; dx = ++p) {
                kernelIndex = (dy + 1) * 3 + (dx + 1);
                dataIndex = ((y + dy) * imageData.width + (x + dx)) * 4 + c;
                tmp += kernel[kernelIndex] * data[dataIndex];
              }
            }
            if (tmp > 255) {
              outData[i] = 255;
            }
            if (tmp < 0) {
              outData[i] = 0;
            } else {
              outData[i] = tmp;
            }
          }
          alphaIndex = (y * imageData.width + x) * 4 + 3;
          outData[alphaIndex] = data[alphaIndex];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-sharp.png";
    };
    sharpButton = document.getElementById('sharp');
    sharpButton.addEventListener('click', sharp);
    negative = function() {
      var i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 - data[i];
        outData[i + 1] = 255 - data[i + 1];
        outData[i + 2] = 255 - data[i + 2];
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-negative.png";
    };
    negativeButton = document.getElementById('negative');
    negativeButton.addEventListener('click', negative);
    contrastEnhancement = function() {
      var filter, i, l, out, outData, ref;
      filter = function(value) {
        var a;
        a = 1.5;
        return a * (value - 127) + 127;
      };
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = filter(data[i]);
        outData[i + 1] = filter(data[i + 1]);
        outData[i + 2] = filter(data[i + 2]);
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-contrast-enhancement.png";
    };
    contrastEnhancementButton = document.getElementById('contrast_enhancement');
    contrastEnhancementButton.addEventListener('click', contrastEnhancement);
    contrastReduction = function() {
      var filter, i, l, out, outData, ref;
      filter = function(value) {
        var a;
        a = 0.5;
        return a * (value - 127) + 127;
      };
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = filter(data[i]);
        outData[i + 1] = filter(data[i + 1]);
        outData[i + 2] = filter(data[i + 2]);
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-contrast-reduction.png";
    };
    contrastReductionButton = document.getElementById('contrast_reduction');
    contrastReductionButton.addEventListener('click', contrastReduction);
    gaussianFilter = function() {
      var alphaIndex, c, dataIndex, dx, dy, i, kernel, kernelIndex, l, m, n, o, out, outData, p, ref, ref1, tmp, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      kernel = [0.00390625, 0.015625, 0.0234375, 0.015625, 0.00390625, 0.015625, 0.0625, 0.09375, 0.0625, 0.015625, 0.0234375, 0.09375, 0.140625, 0.09375, 0.0234375, 0.015625, 0.0625, 0.09375, 0.0625, 0.015625, 0.00390625, 0.015625, 0.0234375, 0.015625, 0.00390625];
      for (y = l = 2, ref = imageData.height - 2; 2 <= ref ? l < ref : l > ref; y = 2 <= ref ? ++l : --l) {
        for (x = m = 2, ref1 = imageData.width - 2; 2 <= ref1 ? m < ref1 : m > ref1; x = 2 <= ref1 ? ++m : --m) {
          for (c = n = 0; n < 3; c = ++n) {
            i = (y * imageData.width + x) * 4 + c;
            tmp = 0;
            for (dy = o = -2; o <= 2; dy = ++o) {
              for (dx = p = -2; p <= 2; dx = ++p) {
                kernelIndex = (dy + 2) * 5 + (dx + 2);
                dataIndex = ((y + dy) * imageData.width + (x + dx)) * 4 + c;
                tmp += kernel[kernelIndex] * data[dataIndex];
              }
            }
            if (tmp > 255) {
              outData[i] = 255;
            }
            if (tmp < 0) {
              outData[i] = 0;
            } else {
              outData[i] = tmp;
            }
          }
          alphaIndex = (y * imageData.width + x) * 4 + 3;
          outData[alphaIndex] = data[alphaIndex];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-gaussian-filter.png";
    };
    gaussianFilterButton = document.getElementById('gaussian_filter');
    gaussianFilterButton.addEventListener('click', gaussianFilter);
    sobelFilter = function() {
      var alphaIndex, c, dataIndex, dx, dy, i, kernel, kernelIndex, l, m, n, o, out, outData, p, ref, ref1, tmp, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      kernel = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
      for (y = l = 1, ref = imageData.height - 1; 1 <= ref ? l < ref : l > ref; y = 1 <= ref ? ++l : --l) {
        for (x = m = 1, ref1 = imageData.width - 1; 1 <= ref1 ? m < ref1 : m > ref1; x = 1 <= ref1 ? ++m : --m) {
          for (c = n = 0; n < 3; c = ++n) {
            i = (y * imageData.width + x) * 4 + c;
            tmp = 0;
            for (dy = o = -1; o <= 1; dy = ++o) {
              for (dx = p = -1; p <= 1; dx = ++p) {
                kernelIndex = (dy + 1) * 3 + (dx + 1);
                dataIndex = ((y + dy) * imageData.width + (x + dx)) * 4 + c;
                tmp += kernel[kernelIndex] * data[dataIndex];
              }
            }
            if (tmp > 255) {
              outData[i] = 255;
            }
            if (tmp < 0) {
              outData[i] = 0;
            } else {
              outData[i] = tmp;
            }
          }
          alphaIndex = (y * imageData.width + x) * 4 + 3;
          outData[alphaIndex] = data[alphaIndex];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-sobel-filter.png";
    };
    sobelFilterButton = document.getElementById('sobel_filter');
    sobelFilterButton.addEventListener('click', sobelFilter);
    laplacianFilter = function() {
      var alphaIndex, c, dataIndex, dx, dy, i, kernel, kernelIndex, l, m, n, o, out, outData, p, ref, ref1, tmp, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      kernel = [1, 1, 1, 1, -8, 1, 1, 1, 1];
      for (y = l = 1, ref = imageData.height - 1; 1 <= ref ? l < ref : l > ref; y = 1 <= ref ? ++l : --l) {
        for (x = m = 1, ref1 = imageData.width - 1; 1 <= ref1 ? m < ref1 : m > ref1; x = 1 <= ref1 ? ++m : --m) {
          for (c = n = 0; n < 3; c = ++n) {
            i = (y * imageData.width + x) * 4 + c;
            tmp = 0;
            for (dy = o = -1; o <= 1; dy = ++o) {
              for (dx = p = -1; p <= 1; dx = ++p) {
                kernelIndex = (dy + 1) * 3 + (dx + 1);
                dataIndex = ((y + dy) * imageData.width + (x + dx)) * 4 + c;
                tmp += kernel[kernelIndex] * data[dataIndex];
              }
            }
            if (tmp > 255) {
              outData[i] = 255;
            }
            if (tmp < 0) {
              outData[i] = 0;
            } else {
              outData[i] = tmp;
            }
          }
          alphaIndex = (y * imageData.width + x) * 4 + 3;
          outData[alphaIndex] = data[alphaIndex];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-laplacian-filter.png";
    };
    laplacianFilterButton = document.getElementById('laplacian_filter');
    laplacianFilterButton.addEventListener('click', laplacianFilter);
    pixelization = function() {
      var count, dx, dy, i, l, m, n, o, out, outData, p, q, ref, ref1, sum, x, xx, y, yy;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (y = l = 0, ref = imageData.height - 2; l < ref; y = l += 5) {
        for (x = m = 0, ref1 = imageData.width - 2; m < ref1; x = m += 5) {
          sum = [0, 0, 0, 0];
          count = 0;
          for (dy = n = 0; n <= 4; dy = ++n) {
            for (dx = o = 0; o <= 4; dx = ++o) {
              yy = y + dy;
              xx = x + dx;
              if (xx < imageData.width && yy < imageData.height) {
                count += 1;
                i = (yy * imageData.width + xx) * 4;
                sum[0] += data[i];
                sum[1] += data[i + 1];
                sum[2] += data[i + 2];
                sum[3] += data[i + 3];
              }
            }
          }
          for (dy = p = 0; p <= 4; dy = ++p) {
            for (dx = q = 0; q <= 4; dx = ++q) {
              yy = y + dy;
              xx = x + dx;
              if (xx < imageData.width && yy < imageData.height) {
                i = (yy * imageData.width + xx) * 4;
                outData[i] = sum[0] / count;
                outData[i + 1] = sum[1] / count;
                outData[i + 2] = sum[2] / count;
                outData[i + 3] = sum[3] / count;
              }
            }
          }
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-pixelization.png";
    };
    pixelizationButton = document.getElementById('pixelization');
    pixelizationButton.addEventListener('click', pixelization);
    pixelizationHard = function() {
      var count, dx, dy, i, l, m, n, o, out, outData, p, q, ref, ref1, sum, x, xx, y, yy;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (y = l = 0, ref = imageData.height - 7; l < ref; y = l += 15) {
        for (x = m = 0, ref1 = imageData.width - 7; m < ref1; x = m += 15) {
          sum = [0, 0, 0, 0];
          count = 0;
          for (dy = n = 0; n <= 14; dy = ++n) {
            for (dx = o = 0; o <= 14; dx = ++o) {
              yy = y + dy;
              xx = x + dx;
              if (xx < imageData.width && yy < imageData.height) {
                count += 1;
                i = (yy * imageData.width + xx) * 4;
                sum[0] += data[i];
                sum[1] += data[i + 1];
                sum[2] += data[i + 2];
                sum[3] += data[i + 3];
              }
            }
          }
          for (dy = p = 0; p <= 14; dy = ++p) {
            for (dx = q = 0; q <= 14; dx = ++q) {
              yy = y + dy;
              xx = x + dx;
              if (xx < imageData.width && yy < imageData.height) {
                i = (yy * imageData.width + xx) * 4;
                outData[i] = sum[0] / count;
                outData[i + 1] = sum[1] / count;
                outData[i + 2] = sum[2] / count;
                outData[i + 3] = sum[3] / count;
              }
            }
          }
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-pixelization-hard.png";
    };
    pixelizationHardButton = document.getElementById('pixelization_hard');
    pixelizationHardButton.addEventListener('click', pixelizationHard);
    binarization = function() {
      var THRESHOLD, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      THRESHOLD = 127;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = data[i] > THRESHOLD ? 255 : 0;
        outData[i + 1] = data[i + 1] > THRESHOLD ? 255 : 0;
        outData[i + 2] = data[i + 2] > THRESHOLD ? 255 : 0;
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-binarization.png";
    };
    binarizationButton = document.getElementById('binarization');
    binarizationButton.addEventListener('click', binarization);
    percentileMethod = function() {
      var count, hist, i, l, m, middle, n, out, outData, ref, ref1, target;
      out = grayscale();
      outData = out.data;
      hist = (function() {
        var l, results;
        results = [];
        for (l = 1; l <= 256; l++) {
          results.push(0);
        }
        return results;
      })();
      for (i = l = 0, ref = outData.length; l < ref; i = l += 4) {
        hist[outData[i]] += 1;
      }
      middle = out.width * out.height / 2;
      count = 0;
      target = 0;
      for (i = m = 255; m >= 0; i = --m) {
        count += hist[i];
        if (count >= middle) {
          target = i;
          break;
        }
      }
      for (i = n = 0, ref1 = outData.length; n < ref1; i = n += 4) {
        outData[i] = outData[i] > target ? 255 : 0;
        outData[i + 1] = outData[i + 1] > target ? 255 : 0;
        outData[i + 2] = outData[i + 2] > target ? 255 : 0;
        outData[i + 3] = outData[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-percentile-method.png";
    };
    percentileMethodButton = document.getElementById('percentile_method');
    percentileMethodButton.addEventListener('click', percentileMethod);
    filter1 = function() {
      var a, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [0.73412, 0.647019, 0.07914];
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])));
        outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])));
        outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])));
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-filter1.png";
      return out;
    };
    filter1Button = document.getElementById('filter1');
    filter1Button.addEventListener('click', filter1);
    filter2 = function() {
      var a, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [0.073412, 0.0647019, 0.07914];
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])));
        outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])));
        outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])));
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-filter2.png";
      return out;
    };
    filter2Button = document.getElementById('filter2');
    filter2Button.addEventListener('click', filter2);
    filter3 = function() {
      var a, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [0.9, 0.0, 0.5];
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])));
        outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])));
        outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])));
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-filter3.png";
      return out;
    };
    filter3Button = document.getElementById('filter3');
    filter3Button.addEventListener('click', filter3);
    filter4 = function() {
      var a, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [0.373412, 0.347019, 0.3914];
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])));
        outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])));
        outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])));
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-filter4.png";
      return out;
    };
    filter4Button = document.getElementById('filter4');
    filter4Button.addEventListener('click', filter4);
    filter5 = function() {
      var a, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [0.0073412, 0.647019, 0.7914];
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])));
        outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])));
        outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])));
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-filter5.png";
      return out;
    };
    filter5Button = document.getElementById('filter5');
    filter5Button.addEventListener('click', filter5);
    filter6 = function() {
      var a, i, l, out, outData, ref;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [0.93412, 0.647019, 0.0057914];
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        outData[i] = 255 / (1 + Math.exp(a[0] * (127 - data[i])));
        outData[i + 1] = 255 / (1 + Math.exp(a[1] * (127 - data[i + 1])));
        outData[i + 2] = 255 / (1 + Math.exp(a[2] * (127 - data[i + 2])));
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-filter6.png";
      return out;
    };
    filter6Button = document.getElementById('filter6');
    filter6Button.addEventListener('click', filter6);
    posterization = function(s) {
      var bb, bg, br, db, dg, dr, i, j, l, m, n, nb, ng, nr, o, out, outData, p, q, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, sb, sg, sr, t;
      if (s == null) {
        s = 5;
      }
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      if (typeof s !== 'number') {
        s = 5;
      }
      sr = s;
      nr = 256 / sr;
      dr = 255 / (sr - 1);
      br = (function() {
        var l, results;
        results = [];
        for (l = 1; l <= 256; l++) {
          results.push(0);
        }
        return results;
      })();
      for (i = l = 0, ref = sr; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
        for (j = m = ref1 = Math.floor(i * nr), ref2 = Math.floor((i + 1) * nr); ref1 <= ref2 ? m < ref2 : m > ref2; j = ref1 <= ref2 ? ++m : --m) {
          br[j] = dr * i;
        }
      }
      sg = s;
      ng = 256 / sg;
      dg = 255 / (sg - 1);
      bg = (function() {
        var n, results;
        results = [];
        for (n = 1; n <= 256; n++) {
          results.push(0);
        }
        return results;
      })();
      for (i = n = 0, ref3 = sg; 0 <= ref3 ? n < ref3 : n > ref3; i = 0 <= ref3 ? ++n : --n) {
        for (j = o = ref4 = Math.floor(i * ng), ref5 = Math.floor((i + 1) * ng); ref4 <= ref5 ? o < ref5 : o > ref5; j = ref4 <= ref5 ? ++o : --o) {
          bg[j] = dg * i;
        }
      }
      sb = s;
      nb = 256 / sb;
      db = 255 / (sb - 1);
      bb = (function() {
        var p, results;
        results = [];
        for (p = 1; p <= 256; p++) {
          results.push(0);
        }
        return results;
      })();
      for (i = p = 0, ref6 = sb; 0 <= ref6 ? p < ref6 : p > ref6; i = 0 <= ref6 ? ++p : --p) {
        for (j = q = ref7 = Math.floor(i * nb), ref8 = Math.floor((i + 1) * nb); ref7 <= ref8 ? q < ref8 : q > ref8; j = ref7 <= ref8 ? ++q : --q) {
          bb[j] = db * i;
        }
      }
      for (i = t = 0, ref9 = data.length; t < ref9; i = t += 4) {
        outData[i] = br[data[i]];
        outData[i + 1] = bg[data[i + 1]];
        outData[i + 2] = bb[data[i + 2]];
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-posterization.png";
      return out;
    };
    posterizationButton = document.getElementById('posterization');
    posterizationButton.addEventListener('click', posterization);
    medianFilter = function() {
      var di, dx, dy, i, l, m, n, o, out, outData, ref, ref1, valuesB, valuesG, valuesR, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      for (y = l = 1, ref = imageData.height - 1; 1 <= ref ? l < ref : l > ref; y = 1 <= ref ? ++l : --l) {
        for (x = m = 1, ref1 = imageData.width - 1; 1 <= ref1 ? m < ref1 : m > ref1; x = 1 <= ref1 ? ++m : --m) {
          i = (y * imageData.width + x) * 4;
          valuesR = [];
          valuesG = [];
          valuesB = [];
          for (dy = n = -1; n <= 1; dy = ++n) {
            for (dx = o = -1; o <= 1; dx = ++o) {
              di = ((y + dy) * imageData.width + (x + dx)) * 4;
              valuesR.push(data[di]);
              valuesG.push(data[di + 1]);
              valuesB.push(data[di + 2]);
            }
          }
          valuesR.sort(function(a, b) {
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
          valuesG.sort(function(a, b) {
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
          valuesB.sort(function(a, b) {
            if (a > b) {
              return -1;
            }
            if (a < b) {
              return 1;
            }
            return 0;
          });
          outData[i] = valuesR[4];
          outData[i + 1] = valuesG[4];
          outData[i + 2] = valuesB[4];
          outData[i + 3] = data[i + 3];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-median-filter.png";
      return out;
    };
    medianFilterButton = document.getElementById('median_filter');
    medianFilterButton.addEventListener('click', medianFilter);
    kaiga = function() {
      var di, dx, dy, histB, histG, histR, i, k, l, m, maxB, maxG, maxR, n, o, out, outData, p, ref, ref1, valueB, valueG, valueR, x, y;
      out = posterization(64);
      outData = out.data;
      for (y = l = 2, ref = imageData.height - 2; 2 <= ref ? l < ref : l > ref; y = 2 <= ref ? ++l : --l) {
        for (x = m = 2, ref1 = imageData.width - 2; 2 <= ref1 ? m < ref1 : m > ref1; x = 2 <= ref1 ? ++m : --m) {
          i = (y * imageData.width + x) * 4;
          histR = (function() {
            var n, results;
            results = [];
            for (n = 1; n <= 256; n++) {
              results.push(0);
            }
            return results;
          })();
          histG = (function() {
            var n, results;
            results = [];
            for (n = 1; n <= 256; n++) {
              results.push(0);
            }
            return results;
          })();
          histB = (function() {
            var n, results;
            results = [];
            for (n = 1; n <= 256; n++) {
              results.push(0);
            }
            return results;
          })();
          for (dy = n = -2; n <= 2; dy = ++n) {
            for (dx = o = -2; o <= 2; dx = ++o) {
              di = ((y + dy) * imageData.width + (x + dx)) * 4;
              histR[data[di]] += 1;
              histG[data[di + 1]] += 1;
              histB[data[di + 2]] += 1;
            }
          }
          maxR = 0;
          maxG = 0;
          maxB = 0;
          valueR = 0;
          valueG = 0;
          valueB = 0;
          for (k = p = 0; p <= 255; k = ++p) {
            if (maxR < histR[k]) {
              maxR = histR[k];
              valueR = k;
            }
            if (maxG < histG[k]) {
              maxG = histG[k];
              valueG = k;
            }
            if (maxB < histB[k]) {
              maxB = histB[k];
              valueB = k;
            }
          }
          outData[i] = valueR;
          outData[i + 1] = valueG;
          outData[i + 2] = valueB;
          outData[i + 3] = data[i + 3];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-kaiga.png";
      return out;
    };
    kaigaButton = document.getElementById('kaiga');
    kaigaButton.addEventListener('click', kaiga);
    firFilter = function() {
      var a, c, di, dx, dy, i, ka, l, m, n, o, out, outData, p, ref, ref1, sum, x, y;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      a = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
      for (y = l = 2, ref = imageData.height; 2 <= ref ? l < ref : l > ref; y = 2 <= ref ? ++l : --l) {
        for (x = m = 2, ref1 = imageData.width; 2 <= ref1 ? m < ref1 : m > ref1; x = 2 <= ref1 ? ++m : --m) {
          i = (y * imageData.width + x) * 4;
          sum = [0, 0, 0];
          for (dy = n = -2; n <= 0; dy = ++n) {
            for (dx = o = -2; o <= 0; dx = ++o) {
              ka = (dy + 2) * 3 + (dx + 2);
              di = ((y + dy) * imageData.width + (x + dx)) * 4;
              for (c = p = 0; p < 3; c = ++p) {
                sum[c] += data[di + c] * a[ka];
              }
            }
          }
          outData[i] = sum[0];
          outData[i + 1] = sum[1];
          outData[i + 2] = sum[2];
          outData[i + 3] = data[i + 3];
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-fir-filter.png";
      return out;
    };
    firFilterButton = document.getElementById('fir_filter');
    firFilterButton.addEventListener('click', firFilter);
    gamma = function() {
      var i, l, max, out, outData, ref;
      out = grayscale();
      outData = out.data;
      max = 255;
      gamma = 1.5;
      for (i = l = 0, ref = outData.length; l < ref; i = l += 4) {
        outData[i] = max * Math.pow(data[i] / max, 1 / gamma);
        outData[i + 1] = max * Math.pow(data[i + 1] / max, 1 / gamma);
        outData[i + 2] = max * Math.pow(data[i + 2] / max, 1 / gamma);
        outData[i + 3] = outData[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-gamma.png";
    };
    gammaButton = document.getElementById('gamma');
    gammaButton.addEventListener('click', gamma);
    red = function() {
      var b, g, h, i, l, max, min, out, outData, r, ref;
      out = grayscale();
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        if (r === g && r === b) {
          h = 0;
        } else if (r >= g && r >= b) {
          h = 60 * ((g - b) / (max - min));
        } else if (g >= r && g >= b) {
          h = 60 * ((b - r) / (max - min)) + 120;
        } else if (b >= r && b >= g) {
          h = 60 * ((r - g) / (max - min)) + 240;
        }
        while (h < 0) {
          h += 360;
        }
        if (h <= 30 || h >= 300) {
          outData[i] = r;
          outData[i + 1] = g;
          outData[i + 2] = b;
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-red.png";
      return out;
    };
    redButton = document.getElementById('red');
    redButton.addEventListener('click', red);
    green = function() {
      var b, g, h, i, l, max, min, out, outData, r, ref;
      out = grayscale();
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        if (r === g && r === b) {
          h = 0;
        } else if (r >= g && r >= b) {
          h = 60 * ((g - b) / (max - min));
        } else if (g >= r && g >= b) {
          h = 60 * ((b - r) / (max - min)) + 120;
        } else if (b >= r && b >= g) {
          h = 60 * ((r - g) / (max - min)) + 240;
        }
        while (h < 0) {
          h += 360;
        }
        if (h <= 180 && h >= 30) {
          outData[i] = r;
          outData[i + 1] = g;
          outData[i + 2] = b;
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-green.png";
      return out;
    };
    greenButton = document.getElementById('green');
    greenButton.addEventListener('click', green);
    blue = function() {
      var b, g, h, i, l, max, min, out, outData, r, ref;
      out = grayscale();
      outData = out.data;
      for (i = l = 0, ref = data.length; l < ref; i = l += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        if (r === g && r === b) {
          h = 0;
        } else if (r >= g && r >= b) {
          h = 60 * ((g - b) / (max - min));
        } else if (g >= r && g >= b) {
          h = 60 * ((b - r) / (max - min)) + 120;
        } else if (b >= r && b >= g) {
          h = 60 * ((r - g) / (max - min)) + 240;
        }
        while (h < 0) {
          h += 360;
        }
        if (h <= 300 && h >= 180) {
          outData[i] = r;
          outData[i + 1] = g;
          outData[i + 2] = b;
        }
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-blue.png";
      return out;
    };
    blueButton = document.getElementById('blue');
    blueButton.addEventListener('click', blue);
    simple = function() {
      var bb, bg, br, db, dg, dr, i, j, l, m, n, nb, ng, nr, o, out, outData, p, q, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, s, sb, sg, sr, t;
      out = grayscale();
      outData = out.data;
      if (typeof s !== 'number') {
        s = 5;
      }
      sr = s;
      nr = 256 / sr;
      dr = 255 / (sr - 1);
      br = (function() {
        var l, results;
        results = [];
        for (l = 1; l <= 256; l++) {
          results.push(0);
        }
        return results;
      })();
      for (i = l = 0, ref = sr; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
        for (j = m = ref1 = Math.floor(i * nr), ref2 = Math.floor((i + 1) * nr); ref1 <= ref2 ? m < ref2 : m > ref2; j = ref1 <= ref2 ? ++m : --m) {
          br[j] = dr * i;
        }
      }
      sg = s;
      ng = 256 / sg;
      dg = 255 / (sg - 1);
      bg = (function() {
        var n, results;
        results = [];
        for (n = 1; n <= 256; n++) {
          results.push(0);
        }
        return results;
      })();
      for (i = n = 0, ref3 = sg; 0 <= ref3 ? n < ref3 : n > ref3; i = 0 <= ref3 ? ++n : --n) {
        for (j = o = ref4 = Math.floor(i * ng), ref5 = Math.floor((i + 1) * ng); ref4 <= ref5 ? o < ref5 : o > ref5; j = ref4 <= ref5 ? ++o : --o) {
          bg[j] = dg * i;
        }
      }
      sb = s;
      nb = 256 / sb;
      db = 255 / (sb - 1);
      bb = (function() {
        var p, results;
        results = [];
        for (p = 1; p <= 256; p++) {
          results.push(0);
        }
        return results;
      })();
      for (i = p = 0, ref6 = sb; 0 <= ref6 ? p < ref6 : p > ref6; i = 0 <= ref6 ? ++p : --p) {
        for (j = q = ref7 = Math.floor(i * nb), ref8 = Math.floor((i + 1) * nb); ref7 <= ref8 ? q < ref8 : q > ref8; j = ref7 <= ref8 ? ++q : --q) {
          bb[j] = db * i;
        }
      }
      for (i = t = 0, ref9 = data.length; t < ref9; i = t += 4) {
        outData[i] = br[outData[i]];
        outData[i + 1] = bg[outData[i + 1]];
        outData[i + 2] = bb[outData[i + 2]];
        outData[i + 3] = outData[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-simple.png";
      return out;
    };
    simpleButton = document.getElementById('simple');
    simpleButton.addEventListener('click', simple);
    lorentz = function() {
      var b, counts, g, i, isEndB, isEndG, isEndR, l, m, n, o, out, outData, r, ratio, ref, ref1, sum, sumB, sumG, sumR;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      counts = {
        r: {},
        g: {},
        b: {}
      };
      for (i = l = 0; l < 256; i = ++l) {
        counts.r[i] = 0;
        counts.g[i] = 0;
        counts.b[i] = 0;
      }
      for (i = m = 0, ref = data.length; m < ref; i = m += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        isEndR = false;
        isEndG = false;
        isEndB = false;
        counts.r[r] += 1;
        counts.g[g] += 1;
        counts.b[b] += 1;
      }
      ratio = {
        r: {},
        g: {},
        b: {}
      };
      sum = data.length / 4;
      sumR = 0;
      sumG = 0;
      sumB = 0;
      for (i = n = 0; n < 256; i = ++n) {
        sumR += counts.r[i];
        sumG += counts.g[i];
        sumB += counts.b[i];
        ratio.r[i] = sumR / sum;
        ratio.g[i] = sumG / sum;
        ratio.b[i] = sumB / sum;
      }
      for (i = o = 0, ref1 = data.length; o < ref1; i = o += 4) {
        outData[i] = 255 * ratio.r[data[i]];
        outData[i + 1] = 255 * ratio.g[data[i + 1]];
        outData[i + 2] = 255 * ratio.b[data[i + 2]];
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-lorentz.png";
      return out;
    };
    lorentzButton = document.getElementById('lorentz');
    lorentzButton.addEventListener('click', lorentz);
    lorentzkai = function() {
      var b, counts, g, i, isEndB, isEndG, isEndR, l, m, n, o, out, outData, r, ratio, ref, ref1, sum, sumB, sumG, sumR;
      out = ctx.createImageData(imageData.width, imageData.height);
      outData = out.data;
      counts = {
        r: {},
        g: {},
        b: {}
      };
      for (i = l = 0; l < 256; i = ++l) {
        counts.r[i] = 0;
        counts.g[i] = 0;
        counts.b[i] = 0;
      }
      for (i = m = 0, ref = data.length; m < ref; i = m += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        isEndR = false;
        isEndG = false;
        isEndB = false;
        counts.r[r] += 1;
        counts.g[g] += 1;
        counts.b[b] += 1;
      }
      ratio = {
        r: {},
        g: {},
        b: {}
      };
      sum = data.length / 4;
      sumR = 0;
      sumG = 0;
      sumB = 0;
      for (i = n = 0; n < 256; i = ++n) {
        sumR += counts.r[i];
        sumG += counts.g[i];
        sumB += counts.b[i];
        ratio.r[i] = sumR / sum;
        ratio.g[i] = sumG / sum;
        ratio.b[i] = sumB / sum;
      }
      for (i = o = 0, ref1 = data.length; o < ref1; i = o += 4) {
        outData[i] = data[i] * ratio.r[data[i]];
        outData[i + 1] = data[i + 1] * ratio.g[data[i + 1]];
        outData[i + 2] = data[i + 2] * ratio.b[data[i + 2]];
        outData[i + 3] = data[i + 3];
      }
      ctx.putImageData(out, 0, 0);
      saveFileName = "image-lorentzkai.png";
      return out;
    };
    lorentzkaiButton = document.getElementById('lorentzkai');
    lorentzkaiButton.addEventListener('click', lorentzkai);
  };

  window.onload = function() {
    var img, input;
    img = document.getElementById('preview');
    input = document.getElementById('getfile');
    input.onchange = function() {
      var image, reader;
      image = new Image();
      image.onload = function() {
        draw(this);
      };
      reader = new FileReader();
      reader.onload = function() {
        return image.src = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    };
  };

}).call(this);
