function solve(obj) {
    function methodValidator(obj) {
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';

        if (obj[propName] === undefined ||
            !validMethods.includes(obj.method)) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function uriValidatior(obj) {
        let pattern = /^[\w\.]+$/;
        let propName = 'uri';

        if (obj[propName] === undefined ||
            !pattern.test(obj.uri)) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function versionValidator(obj) {
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        let propName = 'version';

        if (obj[propName] === undefined ||
            !validVersions.includes(obj.version)) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function messageValidator(obj) {
        let pattern = /^[^<>\\&'"]*$/;
        let propName = 'message';

        if (obj[propName] === undefined ||
            !pattern.test(obj.message)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    methodValidator(obj);
    uriValidatior(obj);
    versionValidator(obj);
    messageValidator(obj);

    return obj;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}


))
