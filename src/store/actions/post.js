import {LOAD_POSTS} from '../types';
import {DATA} from '../../../assets/data/data'

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
}
