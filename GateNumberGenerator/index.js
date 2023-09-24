const fs = require('fs');
const Guid = require('guid');
const { convert } = require('convert-svg-to-png');

function getBoxTextSvg(text) {
    return `<svg width="256px" height="128px" style="background: #ffcc31; padding: 10px;">
    <text x="0" y="0" style="dominant-baseline: hanging; font-size:128px; font-weight: bold;" textLength="95%" lengthAdjust="spacingAndGlyphs">${text}</text>
    </svg>`;
}

function getSpotNumberSvg(text) {
    var size = 70;
    if (text.length == 3)
        size = 55;

    return `<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="50" fill="#ffcc31"></circle>
    <text text-anchor="middle" alignment-baseline="middle" x="64" y="70" font-size="${size}" font-family="arial">${text}</text>
    </svg>`;
}

function getMaterial(text) {
    return `<Material Version="1.4.0" Name="${text}" Guid="{${Guid.create().toString().toUpperCase()}}" SurfaceType="ASPHALT" Type="CODE_DIFFUSE" Metal="0.000000" Rough="0.000000" Opacity="1.000000" BlendMode="Transparent">
	<TagList/>
	<FlagList/>
	<TextureList>
		<Texture FileName="textures\\${text}.png" Binding="MTL_BITMAP_DECAL0"/>
	</TextureList>
	<Attributes>
		<Diffuse Red="1.000000" Green="1.000000" Blue="1.000000"/>
		<Emissive Red="0.000000" Green="0.000000" Blue="0.000000"/>
		<UVOffset U="0.000000" V="0.000000"/>
		<UVScale U="1.000000" V="1.000000"/>
		<UVRotate>0.000000</UVRotate>
		<ExtraParameters>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
		</ExtraParameters>
	</Attributes>
</Material>`;
}

function writePngAndMaterial(text, filename, svgGeneratorFunction) {
    convert(svgGeneratorFunction(text)).then((png) => {
        fs.writeFileSync(`output/${filename}.png`, png);
        fs.writeFileSync(`output/${filename}.png.FLAGS`, "_DEFAULT=+PRECOMPUTEDINVAVG+QUALITYHIGH");
        fs.writeFileSync(`output/${filename}.material`, getMaterial(filename));
    });
}


var gate = [
    "1",
    "4",
    "5",
    "8",
    "9",
    "10",
    "11",
    "12",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "31",
    "32",
    "34",
    "36",
    "37",
    "38",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "51",
    "51L",
    "51R",
    "52",
    "53",
    "53L",
    "53R",
    "54",
    "54L",
    "54R",
    "55",
    "55L",
    "55R",
    "57",
    "58",
    "58",
    "58L",
    "58R",
    "931",
    "932",
    "933"
];

/*
gate.forEach(e => {
    writePng(e, e, getSpotNumberSvg);
});
*/

writePngAndMaterial("↑G10", "UPG10", getBoxTextSvg);
writePngAndMaterial("↖G11", "ULG11", getBoxTextSvg);
writePngAndMaterial("↖G10", "ULG10", getBoxTextSvg);
writePngAndMaterial("↖G8", "ULG8", getBoxTextSvg);
writePngAndMaterial("↖G7", "ULG7", getBoxTextSvg);
writePngAndMaterial("G7↗", "G7UR", getBoxTextSvg);
writePngAndMaterial("G8↗", "G8UR", getBoxTextSvg);
writePngAndMaterial("G9↗", "G9UR", getBoxTextSvg);
writePngAndMaterial("G10↗", "G10UR", getBoxTextSvg);
writePngAndMaterial("G11↑", "G11UP", getBoxTextSvg);
writePngAndMaterial("↑G7", "UPG7", getBoxTextSvg);
writePngAndMaterial("R↗", "RUR", getBoxTextSvg);
writePngAndMaterial("R↑", "RUP", getBoxTextSvg);
writePngAndMaterial("P↗", "PUR", getBoxTextSvg);
