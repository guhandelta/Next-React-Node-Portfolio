import moment from 'moment'

export const formatDate = (date, dateFormat = 'MMMM/YYYY') => date && moment(date).format(dateFormat)

