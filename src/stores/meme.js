import { defineStore } from 'pinia'

export const useMemeStore = defineStore('meme', {
  state: () => ({ meme: memes_image[Math.floor(Math.random() * memes_image.length)] }),

  actions: {
    newmeme() {
      this.meme = memes_image[Math.floor(Math.random() * memes_image.length)]
    }
  }
})

const memes_image = [
  'https://i.imgur.com/zBeeU6k.png',
  'https://i.imgur.com/GFoXFbI.png',
  'https://i.imgur.com/o9Jwb91.png',
  'https://i.imgur.com/N5aF2Bv.png',
  'https://i.imgur.com/TEcG0KK.png',
  'https://i.imgur.com/j27ymYu.png',
  'https://i.imgur.com/BmUp1Vn.png',
  'https://i.imgur.com/8plzAxz.png',
  'https://i.imgur.com/ZDug2iy.png',
  'https://i.imgur.com/R3DiiGz.png',
  'https://i.imgur.com/zF8zdNK.png',
  'https://i.imgur.com/mc4jrFf.png',
  'https://i.imgur.com/rRrUtrj.png',
  'https://i.imgur.com/xMcqDsq.png',
  'https://i.imgur.com/Vg9YU9u.png',
  'https://i.imgur.com/qMy1xBp.png',
  'https://i.imgur.com/sAEkRkT.png',
  'https://i.imgur.com/W05gU1X.png',
  'https://i.imgur.com/TR5ntAD.png',
  'https://i.imgur.com/vz2tnRY.png',
  'https://i.imgur.com/nwACBb7.png',
  'https://i.imgur.com/8PtiJmk.png',
  'https://i.imgur.com/Isg8YQj.png',
  'https://i.imgur.com/EY1S5Yx.png',
  'https://i.imgur.com/wluipU5.png',
  'https://i.imgur.com/UlHiqiA.png',
  'https://i.imgur.com/8wWb1pw.png',
  'https://i.imgur.com/nP7IZhk.png',
  'https://i.imgur.com/FZD7kuk.png',
  'https://i.imgur.com/tXxRhaN.png',
  'https://i.imgur.com/BKGXflG.png',
  'https://i.imgur.com/wLTlHZC.png',
  'https://i.imgur.com/C8Fk32c.png',
  'https://i.imgur.com/G4Q5ZmS.png',
  'https://i.imgur.com/uKhcB7y.png',
  'https://i.imgur.com/4jHRZlg.png',
  'https://i.imgur.com/ochYdtz.png',
  'https://i.imgur.com/SsUkIwz.png',
  'https://i.imgur.com/Ege0TYW.png',
  'https://i.imgur.com/ioofpJ1.png',
  'https://i.imgur.com/2X0xlis.png',
  'https://i.imgur.com/G9L2vq1.png',
  'https://i.imgur.com/fkBAefE.png',
  'https://i.imgur.com/X2ExDcM.png'
]
