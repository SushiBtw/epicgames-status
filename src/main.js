// Made by SushiBtw (https://github.com/SushiBtw/)
// Version 1.0.3 - npmjs.com package - epicgames-status

const UTIL = require('./Utils.js');
const MINIGET = require('miniget');
const BASE_URL = 'https://status.epicgames.com/';

module.exports = async () => {
    const content = await MINIGET(BASE_URL).text();
    const FortniteStatus = getFortniteStatus(content);
    const BattleBreakers = getBattleBreakersStatus(content);
    const EpicOnlineServices = getEpicOnlineServicesStatus(content);
    const RocketLeague = getRocketLeagueStatus(content);

    let PageStatus = UTIL.between(content, '<div class="container">', '\n</div>');
    PageStatus = UTIL.between(PageStatus, '<div', '</div>');
    if (PageStatus.toLowerCase().includes('operational'))
        PageStatus = 'Operational'
    else {
        PageStatus = UTIL.between(PageStatus, '<a', '/a>');
        PageStatus = UTIL.between(PageStatus, '>', '<');
    }

    let EpicGamesStore = UTIL.between(content, 'data-component-id="4n43gb11j5v5"', '/div>');
    let EpicGamesStoreServices = UTIL.between(EpicGamesStore, `<span class="tool icon-indicator fa fa-check" title="`, '"');

    return {
        EpicGames: PageStatus,
        EpicGamesStore: EpicGamesStoreServices,
        Fortnite: FortniteStatus,
        EpicOnlineServices: EpicOnlineServices,
        RocketLeague: RocketLeague,
        BattleBreakers: BattleBreakers,
    }
}

const getFortniteStatus = (content) => {

    let Status = UTIL.between(content, `data-component-id="wf1ys2kx4pxc"`, '>');
    Status = UTIL.between(Status, 'data-component-status="', '"').capitalize();

    let Website = UTIL.between(content, 'data-component-id="l483xcldq6qk"', '>');
    Website = UTIL.between(Website, 'data-component-status="', '"').capitalize();

    let GameServices = UTIL.between(content, 'data-component-id="t9xpn32q9jlb"', '>');
    GameServices = UTIL.between(GameServices, 'data-component-status="', '"').capitalize();

    let Login = UTIL.between(content, 'data-component-id="gp7pb08zbsm1"', '>');
    Login = UTIL.between(Login, 'data-component-status="', '"').capitalize();

    let Parties = UTIL.between(content, 'data-component-id="h591868l4p8r"', '>');
    Parties = UTIL.between(Parties, 'data-component-status="', '"').capitalize();

    let Voice = UTIL.between(content, 'data-component-id="12xt5b2ysxtk"', '>');
    Voice = UTIL.between(Voice, 'data-component-status="', '"').capitalize();

    let Matchmaking = UTIL.between(content, 'data-component-id="n62jd9mnxgnf"', '>');
    Matchmaking = UTIL.between(Matchmaking, 'data-component-status="', '"').capitalize();

    let Stats = UTIL.between(content, 'data-component-id="x6np52ybtwrv"', '>');
    Stats = UTIL.between(Stats, 'data-component-status="', '"').capitalize();

    let ItemShop = UTIL.between(content, 'data-component-id="689s95gldrs3"', '>');
    ItemShop = UTIL.between(ItemShop, 'data-component-status="', '"').capitalize();


    return {
        Status,
        Website,
        GameServices,
        Login,
        Parties,
        Voice,
        Matchmaking,
        Stats,
        ItemShop
    }
}

const getRocketLeagueStatus = (content) => {

    let Status = UTIL.between(content, `data-component-id="d4t23tydt16z"`, '>');
    Status = UTIL.between(Status, 'data-component-status="', '"').capitalize();

    let Login = UTIL.between(content, 'data-component-id="vgmkg5w735pc"', '>');
    Login = UTIL.between(Login, 'data-component-status="', '"').capitalize();

    let Website = UTIL.between(content, 'data-component-id="d93s25x5rv1g"', '>');
    Website = UTIL.between(Website, 'data-component-status="', '"').capitalize();

    let GameServices = UTIL.between(content, 'data-component-id="qdyl62p3jxkn"', '>');
    GameServices = UTIL.between(GameServices, 'data-component-status="', '"').capitalize();

    let Matchmaking = UTIL.between(content, 'data-component-id="jbp0183v67vj"', '>');
    Matchmaking = UTIL.between(Matchmaking, 'data-component-status="', '"').capitalize();

    let Stats = UTIL.between(content, 'data-component-id="hfnd6wr4lvm8"', '>');
    Stats = UTIL.between(Stats, 'data-component-status="', '"').capitalize();

    let ItemShop = UTIL.between(content, 'data-component-id="94htp2hmg0qq"', '>');
    ItemShop = UTIL.between(ItemShop, 'data-component-status="', '"').capitalize();

    let Parties = UTIL.between(content, 'data-component-id="825g1f1pbfwx"', '>');
    Parties = UTIL.between(Parties, 'data-component-status="', '"').capitalize();

    return {
        Status,
        Login,
        Website,
        GameServices,
        Matchmaking,
        Stats,
        ItemShop,
        Parties
    }
}

const getBattleBreakersStatus = (content) => {

    let Status = UTIL.between(content, `data-component-id="r8q22tdgns05"`, '>');
    Status = UTIL.between(Status, 'data-component-status="', '"').capitalize();

    let Website = UTIL.between(content, 'data-component-id="dztgvvnp3tvv"', '>');
    Website = UTIL.between(Website, 'data-component-status="', '"').capitalize();

    let GameServices = UTIL.between(content, 'data-component-id="mx2t0pc48c1h"', '>');
    GameServices = UTIL.between(GameServices, 'data-component-status="', '"').capitalize();

    let Login = UTIL.between(content, 'data-component-id="r3y0l82t4lzc"', '>');
    Login = UTIL.between(Login, 'data-component-status="', '"').capitalize();

    let Friends = UTIL.between(content, 'data-component-id="xzph34rcx3t2"', '>');
    Friends = UTIL.between(Friends, 'data-component-status="', '"').capitalize();

    let ItemShop = UTIL.between(content, 'data-component-id="xnrkwz4rxr0r"', '>');
    ItemShop = UTIL.between(ItemShop, 'data-component-status="', '"').capitalize();


    return {
        Status,
        Website,
        GameServices,
        Login,
        Friends,
        ItemShop
    }
}

const getEpicOnlineServicesStatus = (content) => {

    let Status = UTIL.between(content, `data-component-id="zwclljjbtmfs"`, '>');
    Status = UTIL.between(Status, 'data-component-status="', '"').capitalize();

    let DeveloperPortal = UTIL.between(content, 'data-component-id="l3c46f3rpcxb"', '>');
    DeveloperPortal = UTIL.between(DeveloperPortal, 'data-component-status="', '"').capitalize();

    let Authentication = UTIL.between(content, 'data-component-id="5gwdmkqjh6nj"', '>');
    Authentication = UTIL.between(Authentication, 'data-component-status="', '"').capitalize();

    let P2P = UTIL.between(content, 'data-component-id="8t9qmrkcsp44"', '>');
    P2P = UTIL.between(P2P, 'data-component-status="', '"').capitalize();

    let Matchmaking = UTIL.between(content, 'data-component-id="k1l94l0qn82f"', '>');
    Matchmaking = UTIL.between(Matchmaking, 'data-component-status="', '"').capitalize();

    let PlayerDataStorage = UTIL.between(content, 'data-component-id="5c125kx81yw9"', '>');
    PlayerDataStorage = UTIL.between(PlayerDataStorage, 'data-component-status="', '"').capitalize();

    let Stats = UTIL.between(content, 'data-component-id="z9x81lwqrlzy"', '>');
    Stats = UTIL.between(Stats, 'data-component-status="', '"').capitalize();

    let Achievements = UTIL.between(content, 'data-component-id="6mgv24lkj0p8"', '>');
    Achievements = UTIL.between(Achievements, 'data-component-status="', '"').capitalize();

    let Leaderboards = UTIL.between(content, 'data-component-id="x18t3km6yhc0"', '>');
    Leaderboards = UTIL.between(Leaderboards, 'data-component-status="', '"').capitalize();

    let Lobbies = UTIL.between(content, 'data-component-id="m4xvxnmqdhp5"', '>');
    Lobbies = UTIL.between(Lobbies, 'data-component-status="', '"').capitalize();


    return {
        Status,
        DeveloperPortal,
        Authentication,
        P2P,
        Matchmaking,
        PlayerDataStorage,
        Stats,
        Achievements,
        Leaderboards,
        Lobbies
    }
}