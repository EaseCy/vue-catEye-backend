import IndexLists from '../../model/common/indexLists'


class IndexList {
    constructor() {
        this.indexMovieRender = this.indexMovieRender.bind(this)
        console.log(this.indexMovieRender)
    }

    async indexMovieRender(req, res, next) {
        let index = IndexLists
        let results = await index.find({}, {})
        res.send(results)
    }
    async indexCarouselRender(req, res, next){
        let index = IndexLists
        let results = await index.find({}, {})
        res.send(results)
    }
}

export default new IndexList();