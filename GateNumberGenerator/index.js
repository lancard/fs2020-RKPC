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
    "1E",
    "2",
    "3",
    "6",
    "7",
    "9",
    "10",
    "13",
    "15",
    "17",
    "18",
    "20",
    "30",
    "31",
    "32",
    "32F",
    "33",
    "34",
    "35",
    "36",
    "37",
    "40",
    "41",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
];

/*
gate.forEach(e => {
    writePngAndMaterial(e, e, getSpotNumberSvg);
});
*/

writePngAndMaterial("G1↑", "G1U", getBoxTextSvg);
writePngAndMaterial("G2↑", "G2U", getBoxTextSvg);
writePngAndMaterial("G3↑", "G3U", getBoxTextSvg);
writePngAndMaterial("G4↑", "G4U", getBoxTextSvg);
