/* const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('../../database/credentials.json')

const accessGoogleSheet = async (doc) => {
    const document = new GoogleSpreadsheet(doc)
    await document.useServiceAccountAuth(credentials)
    await document.loadInfo()
    return document
}

const getRows = async (doc, page = 0) => {
    const document = await accessGoogleSheet(doc)
    const sheet = document.sheetsByIndex[page]
    const rows = await sheet.getRows()
    return rows
}

export default getRows */

