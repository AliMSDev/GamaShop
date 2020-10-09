export const menuTogglefunc = () => {
    return {
        type: 'toggle'
    }
}

export const basketfunc = (data) => {
    return {
        type: 'check',
        data: data
    }
}

export const authenticationfunc = () => {
    return {
        type: 'toggle'
    }
}

export const usersfunc = (data) => {
    return {
        type: 'signup',
        data: data
    }
}

export const blogfunc = () => {
    return {
        type: 'blog'
    }
}