# 备份旧系统 Deepin 23

Deepin 使用笔记在分支 [deepin23](https://github.com/duanluan/linux-notes/tree/deepin23)。

> 由于deepin 25升级改动较大，暂不支持deepin 23直接升级

我并没有备份整个系统，而只是将 home 目录压缩拷贝了出来。

```shell
# 将个人目录打包
sudo tar -cf /tmp/home_xxx.tar /home/xxx
# 新开终端查看打包后大小
watch -n 1 ls -lh /tmp/home_xxx.tar
```
