const api = require("../../api");
const { stringify } = require("querystring");

class Hosts extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/hosts");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.HostName]
     * @param {Boolean} [options.IsDeleted]
     * @param {Number} [options.StartingAfter]
     * @param {Number} [options.EndingBefore]
     * @param {Number} [options.Limit]
     * @param {Array} [options.Expand]
     * @returns {Promise}
     */
    async Get(options) {
        return await this.makeFetch("get", `?${stringify(options)}`);
    }

    /**
     *
     * @param {Object} body
     * @param {Number} [body.HostGroupId]
     * @param {Number} [body.Number]
     * @param {String} [body.Name]
     * @param {Boolean} [body.IsOutOfOrder]
     * @param {Boolean} [body.IsLocked]
     * @param {Number} [body.IconId]
     * @param {Boolean} [body.IsDeleted]
     * @param {Object} [body.HostComputer]
     * @param {String} [body.HostComputer.WindowsName]
     * @param {String} [body.HostComputer.MacAddress]
     * @param {Object} [body.HostEndpoint]
     * @param {Number} [body.HostEndpoint.MaximumUsers]
     * @param {Number} [body.HostType]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {Number} [body.HostGroupId]
     * @param {Number} [body.Number]
     * @param {String} [body.Name]
     * @param {Boolean} [body.IsOutOfOrder]
     * @param {Boolean} [body.IsLocked]
     * @param {Number} [body.IconId]
     * @param {Boolean} [body.IsDeleted]
     * @param {Object} [body.HostComputer]
     * @param {String} [body.HostComputer.WindowsName]
     * @param {String} [body.HostComputer.MacAddress]
     * @param {Object} [body.HostEndpoint]
     * @param {Number} [body.HostEndpoint.MaximumUsers]
     * @param {Number} [body.HostType]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async Put(body) {
        return await this.makeFetch("put", "", body);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetById(Id) {
        return await this.makeFetch("get", `/${Id}`);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async Delete(Id) {
        return await this.makeFetch("delete", `/${Id}`);
    }
}

module.exports = Hosts;
