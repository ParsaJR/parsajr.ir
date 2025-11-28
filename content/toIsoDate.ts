import fs from 'node:fs';
import path from 'node:path';


// This dirty javascript will turn this:
// date: 18th Sep 2025
// To this:
// date: 2025-09-18
// Tailored for my blog posts.

let args = process.argv.slice(2);

const MonthTable = new Map([
	['jan', '01'],
	['feb', '02'],
	['mar', '03'],
	['apr', '04'],
	['may', '05'],
	['jun', '06'],
	['jul', '07'],
	['aug', '08'],
	['sep', '09'],
	['oct', '10'],
	['nov', '11'],
	['dec', '12']
]);

args.forEach((value) => {
	let file = path.resolve(value)

	const data = fs.readFileSync(file, 'utf-8')


	data.split(/\r?\n/).slice(0, 15).forEach(line => {
		if (line.startsWith("date:")) {

			let splittedline = line.split(' ')

			if (!splittedline[1].includes('st') && !splittedline[1].includes('th')) {
				return
			}


			let day = splittedline[1].match(/\d+/)?.toString()
			let month = MonthTable.get(splittedline[2].toLowerCase())
			let year = splittedline[3]


			let date = `${year}-${month}-${day?.padStart(2, '0')}`
			if (isNaN(Date.parse(date))) {
				console.error("Invalid date: ", date)
				return
			}

			let formatted = data.replace(/^date:\s*.*$/m, `date: ${date}`)
			fs.writeFile(file, formatted, 'utf8', function(err) {
				if (err) {
					return console.error(err)
				}
			})

			return
		}
	})
})


