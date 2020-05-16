const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const {body} = req;
    let notValid = [];
    if(body.hasOwnProperty('id')){
      notValid.push('reqest body has "id" property');
    }
      Object.keys(fighter).map(e=>{
        let text = e.replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2')
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + " " + '$2')
            .toLowerCase();
      if((e!=='health')&&(!body.hasOwnProperty(e))&&(e!=='id')){
      notValid.push(`${text} is empty`);
      }
      if(e!=='health'&&(e!=='id')&&(!fighter[e](body[e]))){
          notValid.push(`${text} is not valid`);
      }
    });
    if(notValid.length <= 0){
      console.log(body);
      return res.status(200).json({fighter:{name, health, power, defense} = body});
    }else if(notValid.length > 0){
      return res.status(400).json({error:true,message:notValid[0]})
    }
    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    const {body} = req;
    let notValid = [];
    if(body.hasOwnProperty('id')){
      notValid.push('reqest body has "id" property');
      next();
    }
      Object.keys(fighter).map(e=>{
        let text = e.replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2')
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + " " + '$2')
            .toLowerCase();
      if((e!=='health')&&(!body.hasOwnProperty(e))&&(e!=='id')){
      notValid.push(`${text} is empty`);
      }
      if(e!=='health'&&(e!=='id')&&(!fighter[e](body[e]))){
          notValid.push(`${text} is not valid`);
      }
    });
    if(notValid.length <= 0){
      console.log(body);
      return res.status(200).json({fighter:{name, health, power, defense} = body});
    }else if(notValid.length > 0){
      return res.status(400).json({error:true,message:notValid[0]})
    }
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
