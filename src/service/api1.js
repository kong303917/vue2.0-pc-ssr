import axios from 'axios'

const HOST = ''

export function fetch(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: HOST + url,
        })
        .then((response) => {
            console.log(response.data)
            resolve(response.data)
        }) 
        .catch((error) => {
            reject(error)
        })
    })
}

export default {
    topCarousel() {
        return fetch('/mock/indexBanner.json')
    },

    expertStyle() {
        return fetch('/mock/advantageExpertInfo.json')
    },

    expertStyleBanner() {
        return fetch('/mock/betweenExpertBanner.json')
    },

    expertList() {
        return fetch('/mock/indexIndustryExp.json')
    },

    bottomCarousel() {
        return fetch('/mock/indexBannerBottom.json')
    },

    technicianList(offset = 0, limit = 8) {
        return fetch(`/mock/pageExpertInfo.json?offset=${offset}&limit=${limit}`)
    },

    expertFavo(expertId, favoType) {
        let type = 1;
        if(favoType) {
            return fetch(`/favorite/${type}/${expertId}`)
        } else {
            return fetch(`/notFavorite/${type}/${expertId}`)
        }
    },

    getExpertDetail(expertId) {
        return fetch('/mock/detailedExpertInfo.json')
    },

    getExpertAttribute(expertId) {
        return fetch('/mock/expertAttribute.json')
    },

    getExpertResearch(expertId) {
        return fetch('/mock/researchReport.json')
    },

    detailedResearchReport() {
        return fetch('/mock/detailedResearchReport.json')
    },

    getFooterNavs() {
        return fetch('/mock/footerMenu.json')
    },

    getArtDetail(artId) {
        return fetch('/mock/artDetails.json')
    },

    getArtleftbar(artId) {
        return fetch('/mock/artLeftList.json')
    }
}