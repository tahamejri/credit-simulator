
desData = {
    0: {title:"Crédit Auto",des:"Découvrez sans attendre les aventages du Pret à consommer Auto pour financer l'achat d'un véhicule,\n" +" quel que soit le modèle neuf ou d'occasion !",logo:'car'},
    1:{title:"Crédit Personel",des:"Une dépense imprévue ? Une rentrée d'argent décalée ?...Bénéficiez d’une souplesse dans le règlement de vos dépenses grâce à l’Autorisation sur compte.",logo:'home'},
    2:{title:"Crédit D'aménagement",des:"Vous voulez rénover votre intérieur? Vous rêvez d'une nouvelle cuisine? Vous souhaitez installer le chauffage central? n'attendez pas,découvrez nos avantages de pres d'amenagements",logo:'personal'}
}

data = [{title:'Montant souhaité',max:38000,step:1000,unity:'d',type:'Montant souhaité',steps:[0,5000,15000,25000,38000],value:21000},
  {title:'Durée',max:80,step:1,unity:' mois',type:'Durée',steps:[0,20,40,60,80],value:9},
  {title:'Mensualité',max:8000,step:10,unity:'d',type:'Mensualité',steps:[0,2000,4000,6000,8000],value:3300}]  
// data = [{title:'Montant souhaité',max:38000,step:1000,unity:'d',type:'Montant souhaité',value:25000},
//   {title:'Durée',max:48,step:1,unity:' mois',type:'Durée',value:36},
//   {title:'Mensualité',max:8000,step:100,unity:'d',type:'Mensualité',value:900}]

module.exports = {desData,data}