$(document).ready(() => {
  const weaponInfo = {
    fist: [
      [2, 4],
      [4, 4],
      [6, 4],
      [9, 4],
      [12, 3.5],
      [15, 3.5],
      [20, 3.5],
      [25, 3.5],
      [30, 3.5],
      [35, 3.5],
    ],
    rock: [
      [2, 4],
      [4, 4],
      [6, 4],
      [8, 4],
      [10, 3.5],
      [12, 3.5],
      [13, 3],
      [19, 3],
      [25, 3],
      [30, 3],
    ],
    mallet: [
      [6, 6],
      [8, 6],
      [15, 6],
      [20, 5.5],
      [30, 5.5],
      [40, 5.5],
      [50, 5.5],
      [50, 5],
      [55, 5],
      [60, 5],
    ],
    bow: [
      [5, 6],
      [8, 6],
      [12, 5.5],
      [20, 5.5],
      [30, 5.5],
      [38, 5.5],
      [45, 5],
      [50, 5],
      [55, 5],
      [60, 5],
    ],
    pick: [
      [5, 7],
      [10, 7],
      [20, 7],
      [25, 6.5],
      [30, 6.5],
      [35, 6.5],
      [40, 6],
      [45, 6],
      [50, 6],
      [60, 6],
    ],
    sbomb: [
      [10, 12],
      [20, 12],
      [30, 12],
      [40, 11],
      [50, 11],
      [60, 11],
      [70, 11],
      [80, 10],
      [90, 10],
      [100, 10],
    ],
    sword: [
      [10, 8],
      [20, 8],
      [30, 8],
      [40, 8],
      [45, 8],
      [50, 8],
      [55, 7],
      [60, 7],
      [65, 7],
      [70, 7],
    ],
    bbomb: [
      [40, 15],
      [50, 15],
      [60, 15],
      [70, 14],
      [80, 14],
      [90, 14],
      [100, 14],
      [110, 12],
      [120, 12],
      [130, 12],
    ],
    gun: [
      [10, 8],
      [15, 8],
      [20, 8],
      [25, 8],
      [30, 7],
      [35, 7],
      [40, 6],
    ],
    pgun: [
      [10, 7.5],
      [12, 7.5],
      [14, 7.5],
      [20, 7],
      [25, 7],
      [35, 7],
      [45, 7],
      [55, 6],
      [65, 6],
      [75, 6],
    ],
    heal: [
      [1, 12],
      [2, 11],
      [4, 10],
      [7, 9],
      [12, 8],
      [22, 7],
      [35, 6],
    ],
    ttravel: [
      [1, 25],
      [2, 22],
      [4, 20],
      [7, 18],
      [12, 16],
      [20, 14],
      [33, 12],
      [37, 10],
    ],
  };
  const names = [
    "Fist",
    "Rock",
    "Mallet",
    "Bow and Arrow",
    "Pickaxe",
    "Small Bomb",
    "Sword",
    "Big Bomb",
    "Gun",
    "Plasma Gun",
    "Heal",
    "Time Travel",
  ];

  const abbreviatedNames = [
    "fist",
    "rock",
    "mallet",
    "bow",
    "pick",
    "sbomb",
    "sword",
    "bbomb",
    "gun",
    "pgun",
    "heal",
    "ttravel",
  ];

  var list = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
  ];
  var lvls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  var max = [10, 10, 10, 10, 10, 10, 10, 10, 7, 10, 7, 8];

  function DPS(special = -1) {
    let fistDPS =
      weaponInfo["fist"][lvls[0] - 1][0] / weaponInfo["fist"][lvls[0] - 1][1];
    if (special == 0 && lvls[0] != max[0])
      fistDPS = weaponInfo["fist"][lvls[0]][0] / weaponInfo["fist"][lvls[0]][1];
    let rockDPS =
      weaponInfo["rock"][lvls[1] - 1][0] / weaponInfo["rock"][lvls[1] - 1][1];
    if (special == 1 && lvls[1] != max[1])
      rockDPS = weaponInfo["rock"][lvls[1]][0] / weaponInfo["rock"][lvls[1]][1];
    let malletDPS =
      weaponInfo["mallet"][lvls[2] - 1][0] /
      weaponInfo["mallet"][lvls[2] - 1][1];
    if (special == 2 && lvls[2] != max[2])
      malletDPS =
        weaponInfo["mallet"][lvls[2]][0] / weaponInfo["mallet"][lvls[2]][1];
    let bowDPS =
      weaponInfo["bow"][lvls[3] - 1][0] / weaponInfo["bow"][lvls[3] - 1][1];
    if (special == 3 && lvls[3] != max[3])
      bowDPS = weaponInfo["bow"][lvls[3]][0] / weaponInfo["bow"][lvls[3]][1];
    let pickDPS =
      weaponInfo["pick"][lvls[4] - 1][0] / weaponInfo["pick"][lvls[4] - 1][1];
    if (special == 4 && lvls[4] != max[4])
      pickDPS = weaponInfo["pick"][lvls[4]][0] / weaponInfo["pick"][lvls[4]][1];
    let sbombDPS =
      weaponInfo["sbomb"][lvls[5] - 1][0] / weaponInfo["sbomb"][lvls[5] - 1][1];
    if (special == 5 && lvls[5] != max[5])
      sbombDPS =
        weaponInfo["sbomb"][lvls[5]][0] / weaponInfo["sbomb"][lvls[5]][1];
    let swordDPS =
      weaponInfo["sword"][lvls[6] - 1][0] / weaponInfo["sword"][lvls[6] - 1][1];
    if (special == 6 && lvls[6] != max[6])
      swordDPS =
        weaponInfo["sword"][lvls[6]][0] / weaponInfo["sword"][lvls[6]][1];
    let bbombDPS =
      weaponInfo["bbomb"][lvls[7] - 1][0] / weaponInfo["bbomb"][lvls[7] - 1][1];
    if (special == 7 && lvls[7] != max[7])
      bbombDPS =
        weaponInfo["bbomb"][lvls[7]][0] / weaponInfo["bbomb"][lvls[7]][1];
    let gunDPS =
      weaponInfo["gun"][lvls[8] - 1][0] / weaponInfo["gun"][lvls[8] - 1][1];
    if (special == 8 && lvls[8] != max[8])
      gunDPS = weaponInfo["gun"][lvls[8]][0] / weaponInfo["gun"][lvls[8]][1];
    let pgunDPS =
      weaponInfo["pgun"][lvls[9] - 1][0] / weaponInfo["pgun"][lvls[9] - 1][1];
    if (special == 9 && lvls[9] != max[9])
      pgunDPS = weaponInfo["pgun"][lvls[9]][0] / weaponInfo["pgun"][lvls[9]][1];
    let healDPS =
      weaponInfo["heal"][lvls[10] - 1][0] / weaponInfo["heal"][lvls[10] - 1][1];
    if (special == 10 && lvls[10] != max[10])
      healDPS =
        weaponInfo["heal"][lvls[10]][0] / weaponInfo["heal"][lvls[10]][1];
    let ttravelDPS =
      weaponInfo["ttravel"][lvls[11] - 1][0] /
      weaponInfo["ttravel"][lvls[11] - 1][1];
    if (special == 11 && lvls[11] != max[11])
      ttravelDPS =
        weaponInfo["ttravel"][lvls[11]][0] / weaponInfo["ttravel"][lvls[11]][1];
    return (
      fistDPS +
      rockDPS +
      malletDPS +
      bowDPS +
      pickDPS +
      sbombDPS +
      swordDPS +
      bbombDPS +
      gunDPS +
      pgunDPS +
      healDPS +
      ttravelDPS
    ).toFixed(3);
  }

  $("#dps").text("Original DPS: " + DPS());
  for (let i = 0; i < 12; i++) {
    let difference = DPS(i) - DPS();
    list[i][0] = difference.toFixed(3);
  }
  list.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < 12; i++) {
    if (lvls[list[i][1]] == max[list[i][1]]) {
      $("#" + i).html(
        names[list[i][1]] +
          "(Lvl. " +
          lvls[list[i][1]] +
          ")" +
          " &#8594; " +
          names[list[i][1]] +
          "(Lvl. " +
          lvls[list[i][1]] +
          ")[New DPS: " +
          DPS(list[i][1]) +
          ", Increase of <span class='red'>" +
          (DPS(list[i][1]) - DPS()) +
          " DPS</span>]"
      );
    } else {
      $("#" + i).html(
        names[list[i][1]] +
          "(Lvl. " +
          lvls[list[i][1]] +
          ")" +
          " &#8594; " +
          names[list[i][1]] +
          "(Lvl. " +
          (lvls[list[i][1]] + 1) +
          ")[New DPS: " +
          DPS(list[i][1]) +
          ", Increase of <span class='red'>" +
          (DPS(list[i][1]) - DPS()).toFixed(3) +
          " DPS</span>]"
      );
    }
  }
  list = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
  ];

  $("input").on("change", () => {
    for (let i = 0; i < 12; i++) {
      let inputValue = parseInt($("#" + abbreviatedNames[i]).val());
      if (inputValue > max[i]) {
        $("#" + abbreviatedNames[i]).val(max[i]);
        lvls[i] = max[i];
      } else if (inputValue < 1) {
        $("#" + abbreviatedNames[i]).val(1);
        lvls[i] = 1;
      } else {
        lvls[i] = inputValue;
      }
    }
    $("#dps").text("Original DPS: " + DPS());
    for (let i = 0; i < 12; i++) {
      let difference = DPS(i) - DPS();
      list[i][0] = difference.toFixed(3);
    }
    for (let i = 0; i < 12; i++) {
      let difference = DPS(i) - DPS();
      list[i][0] = difference.toFixed(3);
    }
    list.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < 12; i++) {
      if (lvls[list[i][1]] == max[list[i][1]]) {
        $("#" + i).html(
          names[list[i][1]] +
            "(Lvl. " +
            lvls[list[i][1]] +
            ")" +
            " &#8594; " +
            names[list[i][1]] +
            "(Lvl. " +
            lvls[list[i][1]] +
            ")[New DPS: " +
            DPS(list[i][1]) +
            ", Increase of <span class='red'>" +
            (DPS(list[i][1]) - DPS()) +
            " DPS</span>]"
        );
      } else {
        $("#" + i).html(
          names[list[i][1]] +
            "(Lvl. " +
            lvls[list[i][1]] +
            ")" +
            " &#8594; " +
            names[list[i][1]] +
            "(Lvl. " +
            (lvls[list[i][1]] + 1) +
            ")[New DPS: " +
            DPS(list[i][1]) +
            ", Increase of <span class='red'>" +
            (DPS(list[i][1]) - DPS()).toFixed(3) +
            " DPS</span>]"
        );
      }
    }
    list = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 8],
      [0, 9],
      [0, 10],
      [0, 11],
    ];
  });

  //alot of sms multiply the rewards of chests would be cool to know the exact number
  //like some calculator or something
});
