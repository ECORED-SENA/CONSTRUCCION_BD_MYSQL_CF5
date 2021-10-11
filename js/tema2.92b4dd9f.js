(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{2237:function(a,e,t){a.exports=t.p+"img/img9.caeda07a.svg"},"56e4":function(a,e,t){a.exports=t.p+"img/img4.d03331a1.svg"},a7a9:function(a,e,t){a.exports=t.p+"img/img6.8f96e98f.svg"},c383:function(a,e,t){a.exports=t.p+"img/img3.f9d8e23a.svg"},c8c1:function(a,e,t){a.exports=t.p+"img/img8.4e5ae50c.svg"},d0f5:function(a,e,t){a.exports=t.p+"img/img2.93f27c3f.svg"},d4e0:function(a,e,t){a.exports=t.p+"img/img1.37d9f9f1.svg"},e36f:function(a,e,t){a.exports=t.p+"img/img7.252c7502.svg"},fd11:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),a._m(0)],1)},s=[function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[i("div",{staticClass:"titulo-principal"},[i("div",{staticClass:"titulo-principal__numero"},[i("div",{staticClass:"h3"},[a._v("2")])]),i("div",{staticClass:"h3"},[a._v("Tipos de restricciones de integridad")])]),i("div",{staticClass:"row justify-content-center mb-4"},[i("div",{staticClass:"col-lg-9"},[i("figure",{staticClass:"mb-5 mt-5"},[i("img",{attrs:{src:t("d4e0"),alt:"Tipos de restricciones"}})])])]),i("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_1"}},[i("div",{staticClass:"h4"},[a._v("2.1 Datos requeridos")])]),i("p",{staticClass:"mb-5"},[a._v("Establece que una columna tenga un valor Not Null. Se define efectuando la declaración de una columna es Not null cuando la tabla que contiene las columnas se crea por primera vez, como parte de la sentencia Create table.")]),i("div",{staticClass:"h6 mb-4 text-center"},[a._v("Configuración propiedad NOT NULL")]),i("div",{staticClass:"row justify-content-center",staticStyle:{"margin-bottom":"120px"}},[i("div",{staticClass:"col-lg-10"},[i("figure",[i("img",{attrs:{src:t("d0f5"),alt:"Configuración propiedad NOT NULL"}})])])]),i("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_2"}},[i("div",{staticClass:"h4"},[a._v("2.2 Chequeo de validez")])]),i("p",{staticClass:"mb-4"},[a._v("Cuando se crea una tabla, cada columna tiene un tipo de datos y el DBMS asegura que solamente los datos del tipo especificado sean ingresados en la tabla.")]),i("div",{staticClass:"row mb-4 justify-content-center p-5"},[i("div",{staticClass:"col-lg-3 align-self-center"},[i("figure",{staticClass:"mb-3"},[i("img",{staticStyle:{width:"150px","margin-left":"34px"},attrs:{src:t("c383"),alt:"Chequeo de validez"}})])]),i("div",{staticClass:"col-lg-9 align-self-center"},[i("p",{staticClass:"mb-4"},[a._v("El tipo de dato seleccionado en el diseño es de suma importancia ya que este define los datos que serán recibidos y almacenados; esto determina la capacidad, el tamaño y las restricciones al momento de realizar las operaciones de Insert, Update.")])])]),i("p",{staticClass:"mb-4"},[i("strong",[a._v("Ejemplo:")]),a._v(" para la tabla producto, se define un atributo llamado stock el cual define un campo de tipo entero, esto significa que, al momento de insertar algún registro, no se permitirá ingresar valores decimales como 25,5 computadores ya que se generaría un error en su validez.")]),i("div",{staticClass:"h6 mb-4 text-center"},[a._v("Configuración tipos de datos")]),i("div",{staticClass:"row justify-content-center",staticStyle:{"margin-bottom":"120px"}},[i("div",{staticClass:"col-lg-10"},[i("figure",[i("img",{attrs:{src:t("56e4"),alt:"Configuración tipos de datos"}})])])]),i("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_3"}},[i("div",{staticClass:"h4"},[a._v("2.3 Integridad de los datos")])]),i("p",{staticClass:"mb-4"},[a._v("Aquí se establece que la clave primaria de una tabla debe tener un valor único para cada fila de la tabla; si no, la base de datos perderá su integridad; y se especifica en la sentencia Create table. El DBMS comprueba automáticamente la unicidad del valor de la clave primaria con cada sentencia Insert y Update. Un intento de insertar o actualizar una fila con un valor de la clave primaria ya existente fallará.")]),i("div",{staticClass:"h6 mb-4 text-center"},[a._v("Configuración de la llave primaria")]),i("div",{staticClass:"row mb-5 justify-content-center"},[i("div",{staticClass:"col-lg-10"},[i("figure",[i("img",{attrs:{src:t("fdcd"),alt:"Configuración de la llave primaria"}})])])]),i("p",{staticClass:"mb-4"},[a._v("Este tipo de prueba lo que debe garantizar es que no se repitan varios registros o tuplas con un mismo identificador, de ahí el concepto que la llave primaria debe ser un valor único.")]),i("p",{staticClass:"mb-4"},[i("strong",[a._v("Ejemplo:")]),a._v(" en la tabla producto se realizó la inserción de un nuevo producto llamado computador portátil el cual quedó registrado con el idProducto= 1 tal como se evidencia en la siguiente imagen.")]),i("div",{staticClass:"h6 mb-4 text-center"},[a._v("Inserción del primer registro I")]),i("div",{staticClass:"row mb-5 justify-content-center"},[i("div",{staticClass:"col-lg-10"},[i("figure",[i("img",{attrs:{src:t("a7a9"),alt:"Inserción del primer registro I"}})])])]),i("p",{staticClass:"mb-4"},[a._v("Ahora, el tipo de prueba que se debe de hacer es insertar un nuevo registro de otro producto y tratar de utilizar el mismo identificador lo cual genera un error tal como se evidencia en la siguiente figura.")]),i("div",{staticClass:"h6 mb-4 text-center"},[a._v("Inserción del primer registro II")]),i("div",{staticClass:"row justify-content-center",staticStyle:{"margin-bottom":"200px"}},[i("div",{staticClass:"col-lg-10"},[i("figure",[i("img",{attrs:{src:t("e36f"),alt:"Inserción del primer registro II"}})])])]),i("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_4"}},[i("div",{staticClass:"h4"},[a._v("2.4 Integridad referencial")])]),i("p",{staticClass:"mb-5-"},[a._v("Esta asegura la integridad entre las llaves foráneas y primarias (relaciones padres/hijo). Existen cuatro actualizaciones de la base de datos que pueden comprometer la integridad referencial:")]),i("div",{staticClass:"row mb-5 align-items-center justify-content-center p-5"},[i("div",{staticClass:"col-lg-3"},[i("figure",[i("img",{staticStyle:{width:"120px","margin-left":"50px"},attrs:{src:t("c8c1"),alt:"Integridad referencial"}})])]),i("div",{staticClass:"col-lg-9"},[i("ul",{staticClass:"lista-ul"},[i("li",[i("i",{staticClass:"fas fa-check"}),a._v("La inserción de una fila hijo se produce cuando no coincide la llave foránea con la llave primaria del padre.")]),i("li",[i("i",{staticClass:"fas fa-check"}),a._v("La actualización en la llave foránea de la fila hijo, donde se produce una actualización en la clave ajena de la fila hijo con una sentencia Update y la misma no coincide con ninguna llave primaria.")]),i("li",[i("i",{staticClass:"fas fa-check"}),a._v("La supresión de una fila padre, con la que, si una fila padre –que tiene uno o más hijos– se suprime, las filas hijos quedarán huérfanas.")]),i("li",[i("i",{staticClass:"fas fa-check"}),a._v("La actualización de la llave primaria de una fila padre, donde si en una fila padre, que tiene uno o más hijos se actualiza su llave primaria, las filas hijos quedarán huérfanas.")])])])]),i("p",{staticClass:"mb-5"},[a._v("El concepto de la integridad referencial y como se puede ver afectada se puede evidenciar en la siguiente figura.")]),i("div",{staticClass:"h6 mb-5 text-center"},[a._v("Pérdida de la integridad de los datos")]),i("div",{staticClass:"row mb-5 justify-content-center"},[i("div",{staticClass:"col-lg-6"},[i("figure",[i("img",{attrs:{src:t("2237"),alt:"Pérdida de la integridad de los datos"}})])])])])}],l={name:"Tema2",data:function(){return{}}},r=l,n=t("2877"),c=Object(n["a"])(r,i,s,!1,null,"5cc10368",null);e["default"]=c.exports},fdcd:function(a,e,t){a.exports=t.p+"img/img5.89b37d13.svg"}}]);
//# sourceMappingURL=tema2.92b4dd9f.js.map