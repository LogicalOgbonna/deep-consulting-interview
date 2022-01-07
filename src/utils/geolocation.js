export const getCurrentLocation = async ({ cb }) => {
    if (navigator.geolocation) {
        const result = await getPermissionStatus('geolocation');
        if (result.state === 'granted') {
            return navigator.geolocation.getCurrentPosition((position) => {
                cb({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    permitted: true
                });
            });
        } else if (result.state === 'prompt') {
            return navigator.geolocation.getCurrentPosition((position) => {
                cb({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    permitted: true
                });
            });
        } else if (result.state === 'denied') {
            return cb({
                lat: null,
                long: null,
                permitted: false
            });
        }

        result.onchange = event => {
            if (event.target.state === 'granted') {
                return navigator.geolocation.getCurrentPosition((position) => {
                    cb({
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                        permitted: true
                    });
                });
            } else if (event.target.state === 'denied') {
                return cb({
                    lat: null,
                    long: null,
                    permitted: false
                });
            }
        };
    }
};

const getPermissionStatus = name => navigator.permissions.query({ name });