import * as sapper from '@sapper/app';
import axios from "axios";

axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":8080"

sapper.start({
	target: document.querySelector('#sapper')
});