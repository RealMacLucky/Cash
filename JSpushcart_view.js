
JLpushchart_lookuptable = function () {

  
  /* numeric values for each poker positon; an addition of two positions will give an unique value for selecting combos and displaying the correct charts*/

  const LJ = 4;
  const HJ = 8;
  const CO = 16;
  const BTN = 32;
  const SB = 64;
  const BB = 128;  

  /* lookuptable by stacksize for all positions combos*/
  /* the array index (eg. '15') must match the value property of the button HTML element (eg. '15') and the name of the subfolders where the images are stored*/
  lookuptable = [];

  lookuptable['cash'] = [];

  lookuptable['cash'][LJ+HJ] = ['lj_rfi.PNG','lj_vs_hj3bet.PNG','hj_vs_lj_4bet.PNG','hj_vs_lj_open.PNG'];
  lookuptable['cash'][LJ+CO] = ['lj_rfi.PNG','lj_vs_co3bet.PNG','co_vs_lj_4bet.PNG','co_vs_lj_open.PNG'];
  lookuptable['cash'][LJ+BTN] = ['lj_rfi.PNG','lj_vs_btn3bet.PNG','btn_vs_lj_4bet.PNG','btn_vs_lj_open.PNG'];
  lookuptable['cash'][LJ+SB] = ['lj_rfi.PNG','lj_vs_sb3bet.PNG','sb_vs_lj_4bet.PNG','sb_vs_lj_open.PNG',];
  lookuptable['cash'][LJ+BB] = ['lj_rfi.PNG','lj_vs_bb3bet.PNG','bb_vs_lj_4bet.PNG','bb_cold4bet.PNG','bb_vs_lj_open.PNG'];

  lookuptable['cash'][HJ+CO] = ['hj_rfi.PNG','hj_vs_co3bet.PNG','co_vs_hj_4bet.PNG','co_vs_hj_open.PNG',];
  lookuptable['cash'][HJ+BTN] = ['hj_rfi.PNG','hj_vs_btn3bet.PNG','btn_vs_hj_4bet.PNG','btn_vs_hj_open.PNG'];
  lookuptable['cash'][HJ+SB] = ['hj_rfi.PNG','hj_vs_sb3bet.PNG','sb_vs_hj_4bet.PNG','sb_vs_hj_open.PNG'];
  lookuptable['cash'][HJ+BB] = ['hj_rfi.PNG','hj_vs_bb3bet.PNG','bb_vs_hj_4bet.PNG','bb_cold4bet.PNG','bb_vs_hj_open.PNG'];
 
  lookuptable['cash'][CO+BTN] = ['co_rfi.PNG','co_vs_btn3bet.PNG','btn_vs_co_4bet.PNG','btn_vs_co_open.PNG'];
  lookuptable['cash'][CO+SB] = ['co_rfi.PNG','co_vs_sb3bet.PNG','sb_vs_co_4bet.PNG','sb_vs_co_open.PNG'];
  lookuptable['cash'][CO+BB] = ['co_rfi.PNG','co_vs_bb3bet.PNG','bb_vs_co_4bet.PNG','bb_cold4bet.PNG','bb_vs_co_open.PNG'];

  lookuptable['cash'][BTN+SB] = ['btn_rfi.PNG','btn_vs_sb3bet.PNG','sb_vs_btn_4bet.PNG','sb_vs_btn_open.PNG',];
  lookuptable['cash'][BTN+BB] = ['btn_rfi.PNG','btn_vs_bb3bet.PNG','bb_vs_btn_4bet.PNG','bb_cold4bet.PNG','bb_vs_btn_open.PNG  '];

  lookuptable['cash'][SB+BB] = ['bb_vs_sb_limp_raise.PNG','bb_vs_sb_limp.PNG','bb_vs_sb_4bet.PNG','bb_vs_sb_open.PNG','sb_rfi.PNG','sb_vs_bb_3x5raise.PNG','bb_cold4bet.PNG','sb3x_vs_bb3bet.PNG'];

  return lookuptable

} ();

JLpushchart_output = function(navStates) {

        // deepcopy of of sub-array, simple assignment will reference it
        var lookupArray = JSON.parse(JSON.stringify(JLpushchart_lookuptable['cash'][navStates.selectedPos.value + navStates.superSelectedPos.value]));
        document.getElementById("JLpushchart_output").innerHTML = "";        

        if (navStates.backwards) {
          lookupArray.reverse();
        }

        lookupArray.forEach(
          function myFunction(filename) {
           imgSRC = 'img/' + 'cash' + '/' + filename;
           document.getElementById("JLpushchart_output").innerHTML += '<img src="' + imgSRC+ '" alt="' + imgSRC+ '" class="JLpushchart_responsive">';
          }
        )
}
