const controller = {};


const nombres =
{
    title: "Torneo Juvenil - Club Atletico Ayacucho",
    navbar: "Club Atletico Ayacucho"
};

const torneo = {
    cantGrupos: 2,
    cantEquiposGrup: 2,
    cantEquipos: 4
};

controller.home = (req,res) => {
    //console.log(__dirname);
    res.render("index.html", {nombres}); // Render por que utilizo ejs si no res.sendFile. El objeto podria ser un archivo de la bd
};

controller.contact = (req,res) => {
    //console.log(__dirname);
    res.render("contact.html", { nombres }); // Render por que utilizo ejs si no res.sendFile. El objeto podria ser un archivo de la bd
};

controller.nacional = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query("SELECT * FROM equipo", (err, equipos) =>{
            if(err){
                res.json(err);
            }else{
                console.log(equipos);
                res.render("nacional.html", {
                    nombres : nombres,
                    data : equipos,
                    torneo : torneo
                });
            }
        });
    });
};

controller.paralelo = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query("SELECT * FROM equipo", (err,equipos) => {
            if(err){
                res.json(err);
            }else {
                res.render("paralelo.html", {
                    nombres : nombres,
                    data : equipos,
                    torneo : torneo
                });
            };
        });
    });
};

module.exports = controller;