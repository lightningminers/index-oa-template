/**
 * Created by xiangwenwen on 2017/1/23.
 */

function platform(env) {
    return env.platform === 'iOS' ? 'iOS' : 'Android';
}

module.exports = platform;