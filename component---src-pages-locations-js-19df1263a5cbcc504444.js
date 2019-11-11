(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{224:function(e,a,t){"use strict";t.r(a);t(74);var n=t(246),i=t(0),s=t.n(i),o=t(218),r=t(219),l=t(217);t(220);var c=function(e){var a,t;function i(){return e.apply(this,arguments)||this}return t=e,(a=i).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,i.prototype.render=function(){return s.a.createElement(r.a,null,s.a.createElement(l.a,{title:"Locations"}),s.a.createElement("span",{id:"locations",className:"anchor"}),s.a.createElement("section",{className:"locations-section p-lg-5"},s.a.createElement("div",{className:"container bg-light mt-5 pt-5"},s.a.createElement("div",{className:"row justify-content-center no-gutters"},s.a.createElement("div",{className:"col-12 col-lg-9 mb-5"},s.a.createElement("h2",{className:"text-black mb-3 text-center"},"Locations"),s.a.createElement(o.a,{query:"2802327321",render:function(e){return e.allMarkdownRemark.edges.sort((function(e,a){return e.node.fileAbsolutePath>a.node.fileAbsolutePath?1:-1})).map((function(e,a){var t=e.node,n=e.node.frontmatter;return s.a.createElement("div",{key:a},s.a.createElement("span",{className:"anchor",id:"location-"+t.id}),s.a.createElement("h3",{className:"mt-5"},n.title),s.a.createElement("p",null,"Organizers: ",n.organizers.join(", ")),n.website?s.a.createElement("p",null,"Website: ",s.a.createElement("a",{href:n.website},n.website)):null,n.address?s.a.createElement("p",null,"Address: ",s.a.createElement("a",{href:"http://maps.google.com/?q="+n.position.lat+","+n.position.lng},n.address)):null,n.contact?s.a.createElement("p",null,"Contact: ",s.a.createElement("a",{href:"mailto:"+n.contact.join(",")},n.contact.join(", "))):null,s.a.createElement("hr",{className:"d-none d-lg-block mb-0 ml-0"}))}))},data:n}))))))},i}(i.Component);a.default=c},246:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"c1a8a7e3-afcb-5fb7-bcb4-4da484c9e695","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/atlanta.md","frontmatter":{"title":"Brainhack Atlanta","organizers":["Yasmine Bassil"],"contact":["yasminebassil@gatech.edu"],"website":null,"address":"TReNDS center (the Center for Translational Research in Neuroimaging and Data Science) at Georgia State University, Atlanta, GA, USA","position":{"lat":33.7558754,"lng":-84.3896796},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"7df16346-b13b-5f03-860a-e3f48a89658f","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/austin.md","frontmatter":{"title":"Brainhack Austin","organizers":["Cameron Craddock"],"contact":["cameron.craddock@austin.utexas.edu"],"website":"http://computational-neuroimaging-lab.org/","address":"1601 Trinity St, Austin, TX 78701, USA","position":{"lat":30.277313,"lng":-97.734812},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z","2019-11-16T00:00:00.000Z"]}}},{"node":{"id":"d243774e-0ab4-5677-9f36-d0d9fc647557","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/dallas.md","frontmatter":{"title":"Brainhack Dallas","organizers":["Ekarin Pongpipat","Ju-Chi Yu","Mattew Kmiecik","David Hoagey","Micaela Chan"],"contact":["ekarin.pongpipat@utdallas.edu","ju-chi.yu@utdallas.edu","matthew.kmiecik@utdallas.edu","david.hoagey@utdallas.edu","mchan@utdallas.edu"],"website":"https://brainhack-dallas.github.io/mini-brainhack-utd/","address":"The University of Texas at Dallas, 800 W Campbell Rd, Richardson, TX 75080, USA","position":{"lat":32.985986,"lng":-96.749828},"dates":["2019-11-16T00:00:00.000Z","2019-11-17T00:00:00.000Z"]}}},{"node":{"id":"575fa831-f4aa-5f9c-8919-b38048bc6ec4","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/boston.md","frontmatter":{"title":"Brainhack Boston","organizers":["Rudolph Pienaar","Ai Wern Chung"],"contact":["rudolph.pienaar@childrens.harvard.edu","aiwern.chung@childrens.harvard.edu"],"website":"http://fnndsc.childrens.harvard.edu/brainhack2019","address":"Boston Children\'s Hospital, 300 Longwood Ave, Boston, MA 02115, USA","position":{"lat":42.337462,"lng":-71.105686},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z"]}}},{"node":{"id":"352b73f5-1b52-56f2-a91a-5630f13666ca","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/cambridge.md","frontmatter":{"title":"Brainhack Oxbridge","organizers":["Lena Dorfschmidt","Jakub Vohryzek"],"contact":["oxbridgebrainhack@gmail.com"],"website":"https://oxbridgebrainhack.github.io/","address":"Cambridge, UK","position":{"lat":52.1732704,"lng":0.139658},"dates":["2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z","2019-11-16T00:00:00.000Z"]}}},{"node":{"id":"d0c01a4d-38f2-5ebc-852c-6a7a8e238608","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/eugene.md","frontmatter":{"title":"Brainhack Eugene","organizers":["Kate Mills","Dani Cosme","Lucy Whitmore"],"contact":["klmills@uoregon.edu","dcosme@uoregon.edu","lwhitmor@uoregon.edu"],"website":"https://brainhack-eugene.github.io","address":"University of Oregon, Eugene, OR, USA","position":{"lat":44.044834,"lng":-123.0747995},"dates":["2019-11-15T00:00:00.000Z","2019-11-16T00:00:00.000Z","2019-11-17T00:00:00.000Z"]}}},{"node":{"id":"89f19b56-bd70-5ed6-907c-70759e05f1b6","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/donostia.md","frontmatter":{"title":"Brainhack Donostia","organizers":["Polina Timofeeva","Stefano Moia"],"contact":["info.bhg-donostia@bcbl.eu"],"website":"https://brainhackdonostia.pages.bcbl.eu/","address":"BCBL - Basque Center on Cognition, Brain and Language, Paseo Mikeletegi, 69, 20009 Donostia,Spain","position":{"lat":43.294272,"lng":-1.986154},"dates":["2019-05-05T00:00:00.000Z","2019-05-06T00:00:00.000Z","2019-05-07T00:00:00.000Z","2019-05-08T00:00:00.000Z"]}}},{"node":{"id":"4a13c833-57da-57e3-bf6c-542fbf58d168","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/geneva.md","frontmatter":{"title":"Brainhack Geneva","organizers":["Michael Dayan"],"contact":["michael.dayan@fcbg.ch"],"website":"https://brainhack.ch","address":"Campus Biotech, Geneva, Switzerland","position":{"lat":46.222236,"lng":6.148296},"dates":["2019-11-07T00:00:00.000Z","2019-11-08T00:00:00.000Z","2019-11-09T00:00:00.000Z"]}}},{"node":{"id":"5678e975-0ced-5508-b55b-d2087546f513","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/lisbon.md","frontmatter":{"title":"Brainhack Lisbon","organizers":["Julia Huntenburg","Tiago Quendera"],"contact":["julia.huntenburg@research.fchampalimaud.org","tiago.quendera@neuro.fchampalimaud.org"],"website":null,"address":"Champalimaud Foundation, Av. Brasília, 1400-038 Lisboa, Portugal","position":{"lat":38.693563,"lng":-9.22153},"dates":null}}},{"node":{"id":"13d6cdcf-c10f-5886-8223-edd8a8617298","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/marburg.md","frontmatter":{"title":"Brainhack Marburg","organizers":["Lydia Riedl"],"contact":["riedll@staff.uni-marburg.de"],"website":null,"address":"Marburg, Hessen, Germany","position":{"lat":50.8066021,"lng":8.7632194},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"cc378ecc-e08a-5ad5-a49d-892547b34a23","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/london-ca.md","frontmatter":{"title":"Brainhack London Canada","organizers":["Ali Khan","Marieke Mur","Olivia Stanley","Jason Kai","Suzanne Witt","Kasey Van Hedger","Aysha Motala","Geoffrey Ngo","Emma Stewart","Justine Clery","Claire Park","Dimuthu Hemachandra"],"contact":["brainhack.western@gmail.com"],"website":"https://brainhackwestern.github.io/","address":"Western Science Centre, Laureen O. Paterson Building, Western University, London, ON, Canada","position":{"lat":43.0099736,"lng":-81.2736388},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"d56e97b1-4171-5fd9-bff9-52359da56e08","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/marseille.md","frontmatter":{"title":"Brainhack Marseille","organizers":["Sylvain Takerkart","David Meunier","Bastien Cagna"],"contact":["sylvain.takerkart@univ-amu.fr","david.meunier@univ-amu.fr","bastien.cagna@univ-amu.fr"],"website":"https://brainhack_marseille.frama.io/ref2019","address":"Institut de Neurosciences de la Timone, Faculté de Médecine, 27 Boulevard Jean Moulin, 13005 Marseille, France","position":{"lat":43.287051,"lng":5.403467},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z"]}}},{"node":{"id":"5cb041ac-ceb6-5fac-90fe-6b82c504a458","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/montreal.md","frontmatter":{"title":"Brainhack Montreal","organizers":["Tristan Glatard","Claudine Gauthier","Christophe Grova","Chris Steele"],"contact":["tristan.glatard@concordia.ca","claudine.gauthier@concordia.ca"],"website":null,"address":"1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8, Canada","position":{"lat":45.494775,"lng":-73.577463},"dates":["2019-12-04T00:00:00.000Z","2019-12-05T00:00:00.000Z","2019-12-06T00:00:00.000Z"]}}},{"node":{"id":"553dc76e-118f-5628-b98f-4ad8537ac261","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/newhaven.md","frontmatter":{"title":"Brainhack New Haven","organizers":["Dave O\'Connor","Stephanie Noble"],"contact":["dave.oconnor@yale.edu","stephanie.noble@yale.edu"],"website":null,"address":"Yale University, New Haven, CT, USA","position":{"lat":41.3163244,"lng":-72.9223431},"dates":["2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"d6d0f5f8-b4f7-5dd5-83d6-3d524420adbe","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/newjersey.md","frontmatter":{"title":"Brainhack Princeton","organizers":["Anne Mennen","Sam Nastase","Elizabeth McDevitt","Karina Tachihara"],"contact":["sam.nastase@gmail.com"],"website":"https://brainhack-princeton.github.io","address":"Princeton Neuroscience Institute and Peretsman Scully Hall, Princeton University, Princeton, NJ, USA","position":{"lat":40.3434412,"lng":-74.6544729},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z","2019-11-16T00:00:00.000Z"]}}},{"node":{"id":"bb569095-f0b8-5eed-a8cd-a8317f830e98","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/nanning.md","frontmatter":{"title":"Brainhack Nanning","organizers":["Xinian Zuo","Zhixiong Yan"],"contact":["zuoxn@nnnu.edu.cn","yanzx@nnnu.edu.cn"],"website":null,"address":"Nanning Normal University, 45 Hengyang E Rd, Xixiangtang, Nanning, Guangxi, China","position":{"lat":22.841014,"lng":108.320042},"dates":["2019-12-15T00:00:00.000Z"]}}},{"node":{"id":"53f45130-9128-5de8-b17c-d0834a5a9b0c","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/rennes.md","frontmatter":{"title":"Brainhack Rennes","organizers":["Julie Coloigner"],"contact":["julie.coloigner@irisa.fr"],"website":"https://brainhack.irisa.fr","address":"IRISA/Inria Rennes, Campus de Beaulieu 35000 Rennes, Bretagne, France","position":{"lat":48.1151893,"lng":-1.6431373},"dates":["2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"f34a7ef1-3748-580a-ac97-f01ba39d13c1","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/newyork.md","frontmatter":{"title":"Brainhack NYC","organizers":["Steven Giavasis","Lindsay Alexander"],"contact":["steven.giavasis@childmind.org","lindsay.alexander@childmind.org"],"website":"https://nyc2019brainhack.github.io/","address":"Child Mind Institute, 101 E 56th St, New York City, NY 10022, USA","position":{"lat":40.76092,"lng":-73.970801},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"c714c9ed-cc62-5858-812c-888d6d578c74","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/padova.md","frontmatter":{"title":"Brainhack Padova","organizers":["Michel Thiebaut de Schotten","Patrick Friedrich"],"contact":["michel.thiebaut@gmail.com","patrick.friedrich@rub.de"],"website":"http://www.bcblab.com","address":"Padova, Italy","position":{"lat":45.4121758,"lng":11.865474},"dates":["2019-11-12T00:00:00.000Z","2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"ab46883d-bf70-58aa-ad63-e6372eeb5de7","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/sanfrancisco.md","frontmatter":{"title":"Brainhack San Francisco","organizers":["Valentina Borghesani","Maria Luisa Mandelli"],"contact":["valentina.borghesani@ucsf.edu","marialuisa.mandelli@ucsf.edu"],"website":"https://sfbrainhack.github.io/","address":"University of California, San Francisco, CA, USA","position":{"lat":37.7659451,"lng":-122.4759528},"dates":["2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"9a6948b1-2ee5-5304-a390-4d4dc0f97a91","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/portoalegre.md","frontmatter":{"title":"Brainhack Porto Alegre","organizers":["Laura A. Tomaz Da Silva","Felipe Meneguzzi","Augusto Buchweitz","Nathalia Bianchini Esper","Matheus Marcon"],"contact":["laura.angelica@acad.pucrs.br","felipe.meneguzzi@pucrs.br","augusto.buchweitz@pucrs.br","nathalia.esper@pucrs.br","matheus.marcon@edu.pucrs.br"],"website":"https://brainhack-poa.github.io/brainhack-poa-2019/","address":"AGES @ building 32, Av Ipiranga, 6681, Porto Alegre, Brazil","position":{"lat":-30.061142,"lng":-51.173792},"dates":["2019-10-03T00:00:00.000Z","2019-10-04T00:00:00.000Z"]}}},{"node":{"id":"ccc8abd9-e5d8-5d75-8a3b-8cc28d04244b","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/seattle.md","frontmatter":{"title":"Brainhack Seattle","organizers":["Ariel Rokem"],"contact":["arokem@gmail.com"],"website":null,"address":"The University of Washington, Seattle, WA, USA","position":{"lat":47.653844,"lng":-122.30781},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z"]}}},{"node":{"id":"342481b1-8eb5-58cd-b551-c41b9e6676f7","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/shanghai.md","frontmatter":{"title":"Brainhack Shanghai","organizers":["Deniz Vatansever","Wei Cheng"],"contact":["deniz@fudan.edu.cn","wcheng.fdu@gmail.com"],"website":null,"address":"Institute of Science and Technology for Brain-inspired Intelligence, 220 Handan Rd, Wu Jiao Chang, Yangpu, Shanghai, China","position":{"lat":31.297603,"lng":121.503661},"dates":["2019-11-15T00:00:00.000Z","2019-11-16T00:00:00.000Z"]}}},{"node":{"id":"82742560-5689-55ee-9142-1af8dee5f156","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/toronto.md","frontmatter":{"title":"Brainhack Toronto","organizers":["Erin Dickie","Sean Hill"],"contact":["erin.w.dickie@gmail.com","sean.hill@camh.ca"],"website":"https://brainhackto.github.io/Global-Toronto-11-2019/","address":"Krembil Centre for Neuroinformatics, Center for Addiction and Mental Health, Toronto, ON, Canada","position":{"lat":43.654333,"lng":-79.405053},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z"]}}},{"node":{"id":"0c2acefb-7e97-56c4-bc9e-6651ae63d08e","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/utrecht.md","frontmatter":{"title":"Brainhack Utrecht","organizers":["Drosoula Tsangaratou","Charl Linssen","Anastasia Osoianu"],"contact":["brainhacksynergy@gmail.com"],"website":"https://brainhacksynergy.github.io/","address":"Utrecht and The Hague, The Netherlands","position":{"lat":52.0833341,"lng":5.1454323},"dates":["2019-11-13T00:00:00.000Z","2019-11-14T00:00:00.000Z","2019-11-15T00:00:00.000Z","2019-11-16T00:00:00.000Z"]}}},{"node":{"id":"a5df73d8-b7f5-5f95-8d8e-2c8f7c6b7b3c","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/torun.md","frontmatter":{"title":"Brainhack Toruń","organizers":["Karolina Finc"],"contact":["karolinafinc@gmail.com"],"website":null,"address":"Centre for Modern Interdisciplinary Technologies, Nicolaus Copernicus University, Jurija Gagarina 11, 87-100 Toruń, Poland","position":{"lat":53.019557,"lng":18.571189},"dates":["2019-11-16T00:00:00.000Z","2019-11-17T00:00:00.000Z"]}}},{"node":{"id":"178dcbe2-faae-5262-b0f1-b47508fc0d75","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/vienna.md","frontmatter":{"title":"Brainhack Vienna","organizers":["Georg Langs","Ernst Schwartz","Karl-Heinz Nenning","Roxane Licandro"],"contact":["brainhack.vienna@gmail.com"],"website":"https://brainhack-vienna.github.io/","address":"Josefstädter Str. 39, 1080 Wien, Austria","position":{"lat":48.20939,"lng":16.348283},"dates":["2019-12-11T00:00:00.000Z","2019-12-12T00:00:00.000Z","2019-12-13T00:00:00.000Z"]}}},{"node":{"id":"beafd6aa-08ca-5f5b-b7b1-54b53ad603a2","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/washington.md","frontmatter":{"title":"Brainhack Washington, DC","organizers":["Shawn Rhoads","Junaid Merchant"],"contact":["sr1209@georgetown.edu","jmerch@terpmail.umd.edu"],"website":"https://brainhackdc.github.io/BrainHackDC2019/","address":"White-Gravenor Hall, Georgetown University, Washington, DC 20007, USA","position":{"lat":38.909011,"lng":-77.072286},"dates":["2019-11-16T00:00:00.000Z","2019-11-17T00:00:00.000Z"]}}},{"node":{"id":"e7423580-f60f-5ae4-b8fe-e2aefa8cdd0d","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/zagreb.md","frontmatter":{"title":"Brainhack Zagreb","organizers":["Andrija Stajduhar"],"contact":["brainhackzg@gmail.com"],"website":"https://brainhackzg.github.io/","address":"Five, Heinzelova ul. 33, Zagreb, Croatia","position":{"lat":45.810946,"lng":16.001664},"dates":["2019-11-16T00:00:00.000Z","2019-11-17T00:00:00.000Z"]}}},{"node":{"id":"596d106f-54ae-597f-b1e6-6857bed07cec","fileAbsolutePath":"/Users/ash3454/Documents/repos/global2019/content/sites/zurich.md","frontmatter":{"title":"Brainhack Zurich","organizers":["Alessandro Crimi","Martyna Plomecka","Christian Horea"],"contact":["alessandro.crimi@uzh.ch","ioanas@biomed.ee.ethz.ch"],"website":"http://www.brainhackzurich.ch/","address":"TGIM Co-working, Löwenstrasse 17, 8001 Zürich, Switzerland","position":{"lat":47.374061,"lng":8.535003},"dates":["2019-10-03T00:00:00.000Z","2019-10-04T00:00:00.000Z"]}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-locations-js-19df1263a5cbcc504444.js.map