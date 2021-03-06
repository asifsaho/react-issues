/**
 * @desc Format ISO Date to DD-MM-YYYY
 * @param isoDate
 * @returns {string}
 */

function formatDate(isoDate) {
    if ((new Date(isoDate)).toString() === 'Invalid Date') {
        return;
    }

    const date = new Date(isoDate);
    const day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    const month = (date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const year = date.getFullYear();
    return day + '-' + month + '-' + year
}


export default {
    formatDate: formatDate
};