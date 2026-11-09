import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div>
            <h3>カスタマーサービス</h3>
            <ul>
              <li>お問い合わせ</li>
              <li>配送について</li>
              <li>返品・交換</li>
              <li>サイズガイド</li>
            </ul>
          </div>
          <div>
            <h3>アバウトギャップ</h3>
            <ul>
              <li>ブランドについて</li>
              <li>サステナビリティ</li>
              <li>採用情報</li>
            </ul>
          </div>
          <div>
            <h3>アカウント</h3>
            <ul>
              <li>ログイン</li>
              <li>会員登録</li>
              <li>注文履歴</li>
            </ul>
          </div>
        </div>
        <div className={styles.legal}>
          <p>© Gap Inc. UX redesign mockup — not affiliated with Gap Inc.</p>
          <p>
            <span>利用規約</span>
            <span>プライバシーポリシー</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
