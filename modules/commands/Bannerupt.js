const loz = ["https://imgur.com/evWplKH.png","https://imgur.com/VwOYMn3.png","https://imgur.com/WuOVJIa.png","https:/ /imgur.com/6SiB9yB.png","https://imgur.com/BRmVPFh.png","https://imgur.com/63E6i9f.png","https://imgur.com/o3OaHBz.png "," https://imgur.com/JxeFlO8.png "," https://imgur.com/i5wFLzQ.png "," https://imgur.com/L209zJL.png "," https:// imgur .com / Y1AJjrN.png "," https://imgur.com/0rQdQPO.png "," https://imgur.com/hcOkU5i.png "," https://imgur.com/KNajylt.png ", "https://imgur.com/cKWScwd.png","https://imgur.com/xrLi2Ss.png","https://imgur.com/PdVcRjh.png","https://imgur.com /9gSky1P.png","https://imgur.com/aG76R3G.png","https://imgur.com/VD6yYki.png ","https://imgur.com/5cBezU8.png","https://imgur.com/5cBezU8.png","https://imgur.com/9Gw4scs.png "]
module.exports.config = {
  tên: "bannerupt",
  phiên bản: "1.0.0",
  hasPermssion: 0,
  tín dụng: "Hanaku UwuU",
  mô tả: "banner",
  commandCategory: "Tạo ảnh",
  tập quán: "",
  thời gian hồi chiêu: 5
};
module.exports.run = async function ({api, args, event, permssion}) {
  const axios = demand ('axios')
   if (args [0] == "find" || args [0] == "find") {
    const lengthchar = (chờ axios.get (`https://api.nhatngu123.repl.co/taoanhdep/search?type=id&id=$ {args [1]}`)) .data
    const t = (chờ axios.get (lengthchar.imgAnime, {
        responseType: "stream"
      })).dữ liệu;
    var msg = ({
      body: `ID NHÂN VẬT $ {args [1]}, MÀU MẸ ĐỊNH $ {lengthchar.colorBg}`,
      đính kèm: t
    })
    return api.sendMessage (msg, event.threadID, event.messageID)
  }
 else if (args [0] == "list") {
    const list = await axios.get ("https://api.nhatngu123.repl.co/taoanhdep/list");
    trang var = 1;
    page = parseInt (args [1]) || 1;
    trang <-1? trang = 1: "";
    var giới hạn = 15;
    var count = list.data.listAnime.length;
    var numPage = Math.ceil (số lượng / giới hạn);
    var msg = [];
    for (var i = limit * (page - 1); i <limit * (page - 1) + limit; i ++) {
      if (i> = count) break;
      var nv = list.data.listAnime [i] .name;
      msg + = `$ {i + 0}. $ {nv} \ n`
    }
      msg + = `Trang ($ {page} / $ {numPage}) \ nDùng $ {global.config.PREFIX} $ {this.config.name} list <số trang>`;
      return api.sendMessage (msg, event.threadID, event.messageID);
  } khác {
  const fs = Required ('fs-extra')
   if (! fs.existsSync (__ dirname +
        `/ tad / UTM-Avo.ttf`)) {
        let getfont = (await axios.get (`https: //github.com/hanakuUwU/font/blob/main/UTM%20Avo.ttf? raw = true`, {responseType:" arraybuffer "})). data;
        fs.writeFileSync (__ dirname + `/ tad / UTM-Avo.ttf`, Buffer.from (getfont," utf-8 "));
      }
         if (! fs.existsSync (__ dirname +
      `/ tad / phenomicon.ttf`)) {
      let getfont2 = (await axios.get (`https: // github.com / hanakuUwU / font / raw / main / phenomicon.ttf`, {responseType:" arraybuffer "})). data;
      fs.writeFileSync (__ dirname + `/ tad / phenomicon.ttf`, Buffer.from (getfont2," utf-8 "));
    };
  if (! fs.existsSync (__ dirname +
      `/ tad / CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get (`https: // github.com / hanakuUwU / font / raw / main / CaviarDreams.ttf`, {responseType:" arraybuffer "})). data;
      fs.writeFileSync (__ dirname + `/ tad / CaviarDreams.ttf`, Buffer.from (getfont3," utf-8 "));
    };
   return api.sendMessage ("Reply Tin Nhắn Này Để Chọn Char", event.threadID, (err, info) => {
    trả về global.client.handleReply.push ({
      bước 1,
      tên: this.config.name,
      tác giả: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
}
}
module.exports.handleReply = hàm async ({api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies}) {
  const axios = demand ("axios");
  const fs = demand ("fs-extra");
  const request = request ("yêu cầu");
  if (event.senderID! = handleReply.author) return api.sendMessage ('CúC', event.threaID);
  const {loadImage, createCanvas, registerFont} = request ("canvas");
  const path = request ('path');
  const Canvas = Required ('canvas');
  let pathImg = __dirname + `/ tad / avatar_1.png`;
  let pathAva = __dirname + `/ tad / avatar_2.png`;
  if (handleReply.step == 1) {
     api.unsendMessage (handleReply.messageID);
    const o = [];
    for (let i = 0; i <loz.length; i ++) {
    const t = (chờ axios.get (`$ {loz [i]}`, {
        responseType: "stream"
      })).dữ liệu;
    o.push (t)
  }
  const msg = ({
    body: `You are select the character mang number of the $ {event.body}, reply this message to select the frame color`,
     đính kèm: o
  })
    return api.sendMessage (msg, event.threadID, (err, info) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước 2,
        tên: this.config.name,
        tác giả: event.senderID,
        id: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  }
  else if (handleReply.step == 2) {
     api.unsendMessage (handleReply.messageID);
    const z = (chờ axios.get (`$ {loz [event.body - 1]}`, {
        responseType: "stream"
      })).dữ liệu;
  const msg = ({
    body: `You are select the number of $ {event.body}, this to write main name`,
     đính kèm: z
  })
    return api.sendMessage (msg, event.threadID, (err, info) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước 3,
        tên: this.config.name,
        tác giả: event.senderID,
        id: handleReply.id,
        khung: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  }
    else if (handleReply.step == 3) {
     api.unsendMessage (handleReply.messageID);
    return api.sendMessage (`Bạn chọn chính tên của mình là $ {event.body}, trả lời tiếp tục thông báo này để nhập phụ tên`, event.threadID, (err, info) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước 4,
        tên: this.config.name,
        tác giả: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  }
  khác nếu (handleReply.step == 4) {
     api.unsendMessage (handleReply.messageID);
    return api.sendMessage (`Bạn chọn phụ tên của mình là $ {event.body}, hãy trả lời tiếp tục thông báo này để nhập tên người dùng vào instagram`, event.threadID, (err, info) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước: 5,
        tên: this.config.name,
        tác giả: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  }
    khác nếu (handleReply.step == 5) {
     api.unsendMessage (handleReply.messageID);
    return api.sendMessage (`Bạn đã nhập tên người dùng trên instagram của mình là $ {event.body}, hãy trả lời tiếp tục thông báo này để nhập tên người dùng github`, event.threadID, (err, info) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước: 6,
        tên: this.config.name,
        tác giả: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  }
      else if (handleReply.step == 6) {
     api.unsendMessage (handleReply.messageID);
    return api.sendMessage (`Bạn đã nhập tên người dùng github của mình là $ {event.body}, hãy trả lời tiếp tục thông báo này để nhập tên người dùng facebook`, event.threadID, (err, info) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước: 7,
        tên: this.config.name,
        tác giả: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: handleReply.inst,
        github: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  }
  else if (handleReply.step == 7) {
    api.unsendMessage (handleReply.messageID);
    return api.sendMessage (`Bạn đã nhập tên người dùng facebook của mình là $ {event.body}, hãy trả lời tiếp tục thông báo này để nhập màu mà bạn muốn ghi không nếu bạn muốn sử dụng mặc định màu`, event.threadID, ( err, thông tin) => {
      if (err) return api.sendMessage (`Lỗi bất định`, event.threadID)
      trả về global.client.handleReply.push ({
        bước: 8,
        tên: this.config.name,
        tác giả: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: handleReply.inst,
        github: handleReply.github,
        fb: event.body,
        messageID: info.messageID
      })
    }, event.messageID)
  } else if (handleReply.step == 8) {
    api.unsendMessage (handleReply.messageID);
    const tenchinh = handleReply.tenchinh;
    const id_ = handleReply.id;
    const subname = handleReply.tenphu;
    const khung = handleReply.khung;
    const inst = handleReply.inst;
    const github = handleReply.github;
    const fb = handleReply.fb;
    const color_ = event.body;
    if (id_ == "random" || id_ == "Random") {
      var id = Math.floor (Math.random () * 848)
    } khác {
      var id = id_
    }
    if (color_ == "no" || color_ == "Không") {
        const lengthchar = (chờ axios.get (`https://api.diencute1.repl.co/taoanhdep/search?type=id&id=$ {id - 1}`)). dữ liệu
      var color = lengthchar.colorBg;
    } khác {
      var color = color_;
    }
    const lengthcharr = (await axios.get (`https://api.diencute1.repl.co/taoanhdep/search?type=id&id=$ {id - 1}`)). dữ liệu
     let background = (await axios.get (encodeURI (`$ {loz [khung - 1]}`), {responseType: "arraybuffer"})). data;
    fs.writeFileSync (pathImg, Buffer.from (background, "utf-8"));
    let ava = (await axios.get (encodeURI (`$ {lengthcharr.imgAnime}`), {responseType: "arraybuffer"})). data;
    fs.writeFileSync (pathAva, Buffer.from (ava, "utf-8"));
    let l1 = await loadImage (pathAva);
    let a = await loadImage (pathImg);
    let canvas = createCanvas (a.width, a.height);
    var ctx = canvas.getContext ("2d");
    ctx.fillStyle = color;
    ctx.fillRect (0, 0, canvas.width, canvas.height);
    ctx.drawImage (l1, -200, -200, 1200, 1200);
    ctx.drawImage (a, 0, 0, canvas.width, canvas.height);
     registerFont (__ dirname + `/ tad / phenomicon.ttf`, {
      họ: "phenomicon"
    });
    ctx.textAlign = "bắt đầu";
    ctx.strokeStyle = color;
    ctx.filter = "độ sáng (90%) độ tương phản (110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = color;
    ctx.fillText (tenchinh, 900, 340);
    ctx.beginPath ();
  ////////////////////////////////////////////
   registerFont (__ dirname + `/ tad / UTM-Avo.ttf`, {
      gia đình: "UTM"
    });
    ctx.textAlign = "bắt đầu";
    ctx.font = "70px UTM";
    ctx.fillStyle = "# 000000";
    ctx.fillText (tên phụ, 920, 440);
    ctx.restore ();
    ctx.save ();
registerFont (__ dirname + `/ tad / CaviarDreams.ttf`, {
      thời gian cho gia đình"
    });
    ctx.textAlign = "bắt đầu";
    ctx.font = "45px thời gian";
    ctx.fillText ("@" + inst, 930, 540)
    ctx.fillText ("@" + github, 930, 610)
    ctx.fillText ("@" + fb, 930, 690)
    ctx.restore ();
    ctx.save ();
    ctx.beginPath ();
      const imageBuffer = canvas.toBuffer ();
  fs.writeFileSync (pathImg, imageBuffer);

     trả về api.sendMessage ({
     body: `` image of your here` ',
     tệp đính kèm: fs.createReadStream (pathImg)
   },
     event.threadID,
     () => fs.unlinkSync (pathImg),
     fs.unlinkSync (pathAva),
     event.messageID
   );
  }
}