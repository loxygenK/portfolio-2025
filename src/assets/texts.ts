export const INTRODUCTION = paragraphify(`
フライさんです。感覚を論理に落とし込むのが好きで、それを生業としています。

論理系というよりも、感覚系 (右脳?) に近いかも、という自己認識を持っています。
コードを書くときも、論理的思考の他に感覚的な思考も強く働いている気がします。

慎重すぎるところがあったり等、まだ人として未熟なところがそれなりにあります。
また、あまり何も考えずに大人になってしまったので、自分がどういう人間なのか、自分でもよくわかっていません。
長い期間をかけて探していくつもりです!
`).map(longText);

function longText(text: string): string {
  return text.trim().replace("\n", "");
}

function paragraphify(text: string): string[] {
  return text.split("\n\n");
}
