export function TwitterFollowCard ({ userName, name}) {
const avatarSrc = `https://unavatar.io/${userName}`
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="avatar" src={avatarSrc} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    )
}