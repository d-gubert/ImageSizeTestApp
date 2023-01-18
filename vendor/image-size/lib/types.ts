// load all available handlers explicitely for browserify support
import { BMP } from './typeHandlers/bmp'
import { CUR } from './typeHandlers/cur'
import { DDS } from './typeHandlers/dds'
import { GIF } from './typeHandlers/gif'
import { ICNS } from './typeHandlers/icns'
import { ICO } from './typeHandlers/ico'
import { J2C } from './typeHandlers/j2c'
import { JP2 } from './typeHandlers/jp2'
import { JPG } from './typeHandlers/jpg'
import { KTX } from './typeHandlers/ktx'
import { PNG } from './typeHandlers/png'
import { PNM } from './typeHandlers/pnm'
import { PSD } from './typeHandlers/psd'
import { SVG } from './typeHandlers/svg'
import { TGA } from './typeHandlers/tga'
import { WEBP } from './typeHandlers/webp'

export const typeHandlers = {
  bmp: BMP,
  cur: CUR,
  dds: DDS,
  gif: GIF,
  icns: ICNS,
  ico: ICO,
  j2c: J2C,
  jp2: JP2,
  jpg: JPG,
  ktx: KTX,
  png: PNG,
  pnm: PNM,
  psd: PSD,
  svg: SVG,
  tga: TGA,
  webp: WEBP,
}

export type imageType = keyof typeof typeHandlers
