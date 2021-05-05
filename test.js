isBalanced(node = this.root) {
    if (!node) {
        return true;
    }

    if (Math.abs(this.height(node.left) - this.height(node.right)) > 1) {
        return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
}
